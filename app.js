/**
 * APP.JS - Gestione logica applicazione
 * 
 * Questo file contiene la gestione dello stato e delle interazioni
 */

// State Management
window.AppState = {
  currentView: 'profilo',
  searchQuery: '',
  favorites: [],
  currentDetailId: null,
  currentDetailType: null,

  init: function() {
    // Carica i preferiti dal localStorage
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        this.favorites = JSON.parse(saved);
      } catch (e) {
        this.favorites = [];
      }
    }
  },

  isFavorite: function(id) {
    return this.favorites.includes(id);
  },

  addFavorite: function(id) {
    if (!this.isFavorite(id)) {
      this.favorites.push(id);
      this.saveFavorites();
    }
  },

  removeFavorite: function(id) {
    const index = this.favorites.indexOf(id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  },

  saveFavorites: function() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  },

  getStats: function() {
    const specialitaSalvate = database.specialita.filter(s => this.isFavorite(s.id)).length;
    const brevettiSalvati = database.brevetti.filter(b => this.isFavorite(b.id)).length;
    const totale = specialitaSalvate + brevettiSalvati;

    return {
      totale: totale,
      specialita: specialitaSalvate,
      brevetti: brevettiSalvati,
      percentualeSpecialita: database.specialita.length > 0
        ? Math.round((specialitaSalvate / database.specialita.length) * 100)
        : 0,
      percentualeBrevetti: database.brevetti.length > 0
        ? Math.round((brevettiSalvati / database.brevetti.length) * 100)
        : 0
    };
  }
};

// Main App Object
window.App = {
  /**
   * Inizializza l'applicazione
   */
  init: function() {
    AppState.init();
    this.setupEventListeners();
    this.setupPWA();
    this.renderCurrentView();
  },

  /**
   * Setup event listeners
   */
  setupEventListeners: function() {
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase();
      this.renderCurrentView();
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.dataset.view;
        this.showView(view);
      });
    });

    // Detail view
    document.getElementById('backBtn').addEventListener('click', () => {
      this.closeDetail();
    });

    document.getElementById('detailFavoriteBtn').addEventListener('click', () => {
      this.toggleFavoriteDetail();
    });

    // Install prompt
    document.getElementById('closeInstallBtn').addEventListener('click', () => {
      this.closeInstallPrompt();
    });
  },

  /**
   * Setup PWA install e aggiornamenti
   */
  setupPWA: function() {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      document.getElementById('installPrompt').classList.add('show');
    });

    document.getElementById('installBtn').addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        document.getElementById('installPrompt').classList.remove('show');
      }
    });

    // Service Worker con gestione aggiornamenti
    if ('serviceWorker' in navigator) {
      let refreshing = false;

      navigator.serviceWorker.register('/pwa-specialita-eg/sw.js')
        .then((registration) => {
          console.log('[App] Service Worker registrato');

          // Controlla aggiornamenti ogni 30 minuti
          setInterval(() => {
            registration.update();
          }, 30 * 60 * 1000);

          // Rileva quando c'è un nuovo service worker in attesa
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('[App] Nuovo Service Worker trovato');

            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // C'è un aggiornamento pronto!
                this.mostraNotificaAggiornamento();
              }
            });
          });
        })
        .catch((err) => {
          console.error('[App] Registrazione Service Worker fallita:', err);
        });

      // Ricarica automatica quando il nuovo SW prende il controllo
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  },

  /**
   * Mostra notifica di aggiornamento disponibile
   */
  mostraNotificaAggiornamento: function() {
    // Rimuovi eventuali banner precedenti
    const oldBanner = document.getElementById('update-banner');
    if (oldBanner) {
      oldBanner.remove();
    }

    // Crea il banner di aggiornamento
    const banner = document.createElement('div');
    banner.id = 'update-banner';
    banner.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #2C5530;
        color: white;
        padding: 15px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease-out;
      ">
        <p style="margin: 0 0 10px 0; font-size: 14px;">
          <strong>🎉 Nuova versione disponibile!</strong>
        </p>
        <button id="reload-button" style="
          background: #E8DCC4;
          color: #2C5530;
          border: none;
          padding: 10px 24px;
          border-radius: 20px;
          font-weight: bold;
          cursor: pointer;
          margin-right: 10px;
          font-size: 14px;
        ">
          Aggiorna ora
        </button>
        <button id="dismiss-button" style="
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 10px 24px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        ">
          Dopo
        </button>
      </div>
    `;

    // Aggiungi animazione CSS
    if (!document.getElementById('update-banner-styles')) {
      const style = document.createElement('style');
      style.id = 'update-banner-styles';
      style.textContent = `
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(banner);

    // Gestione click sul pulsante "Aggiorna ora"
    document.getElementById('reload-button').addEventListener('click', () => {
      // Attiva il nuovo service worker e ricarica
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    });

    // Gestione click sul pulsante "Dopo"
    document.getElementById('dismiss-button').addEventListener('click', () => {
      banner.remove();
    });
  },

  /**
   * Cambia vista
   */
  showView: function(view) {
    AppState.currentView = view;
    AppState.searchQuery = '';
    document.getElementById('searchInput').value = '';
    
    UI.updateNavbar(view);
    this.renderCurrentView();
  },

  /**
   * Renderizza la vista corrente
   */
  renderCurrentView: function() {
    const container = document.getElementById('contentArea');
    let items = [];

    // Gestione vista profilo
    if (AppState.currentView === 'profilo') {
      const stats = AppState.getStats();
      let favorites = [
        ...database.specialita.filter(s => AppState.isFavorite(s.id)),
        ...database.brevetti.filter(b => AppState.isFavorite(b.id))
      ];

      // Filtra per ricerca se presente
      if (AppState.searchQuery) {
        favorites = favorites.filter(item =>
          item.nome.toLowerCase().includes(AppState.searchQuery) ||
          item.descrizione.toLowerCase().includes(AppState.searchQuery)
        );
      }

      container.innerHTML = UI.renderProfiloView(stats, favorites);
      return;
    } else if (AppState.currentView === 'specialita') {
      items = database.specialita;
    } else if (AppState.currentView === 'brevetti') {
      items = database.brevetti;
    }

    // Filtra per ricerca
    if (AppState.searchQuery) {
      items = items.filter(item => 
        item.nome.toLowerCase().includes(AppState.searchQuery) ||
        item.descrizione.toLowerCase().includes(AppState.searchQuery)
      );
    }

    const isBrevetto = AppState.currentView === 'brevetti';
    container.innerHTML = UI.renderCardsGrid(items, isBrevetto);
  },

  /**
   * Toggle preferito
   */
  toggleFavorite: function(id) {
    if (AppState.isFavorite(id)) {
      AppState.removeFavorite(id);
    } else {
      AppState.addFavorite(id);
    }
    this.renderCurrentView();
  },

  /**
   * Toggle preferito nel dettaglio
   */
  toggleFavoriteDetail: function() {
    if (AppState.currentDetailId) {
      this.toggleFavorite(AppState.currentDetailId);
      UI.updateDetailFavoriteButton(AppState.currentDetailId);
    }
  },

  /**
   * Mostra dettaglio
   */
  showDetail: function(id, type) {
    const item = type === 'brevetto' ? 
      database.brevetti.find(b => b.id === id) :
      database.specialita.find(s => s.id === id);
    
    if (!item) return;
    
    AppState.currentDetailId = id;
    AppState.currentDetailType = type;
    
    const detailView = document.getElementById('detailView');
    detailView.className = `detail-view ${type}`;
    
    document.getElementById('detailTitle').textContent = item.nome;
    UI.updateDetailFavoriteButton(id);
    
    document.getElementById('detailContent').innerHTML = UI.renderDetailContent(item, type);
    
    detailView.classList.add('active');
  },

  /**
   * Chiudi dettaglio
   */
  closeDetail: function() {
    document.getElementById('detailView').classList.remove('active');
    AppState.currentDetailId = null;
    AppState.currentDetailType = null;
  },

  /**
   * Chiudi install prompt
   */
  closeInstallPrompt: function() {
    document.getElementById('installPrompt').classList.remove('show');
  }
};

// Inizializza l'app quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
  // Nascondi la splash screen dopo 2 secondi
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      splash.classList.add('hidden');
      // Rimuovi completamente dopo la transizione
      setTimeout(() => {
        splash.style.display = 'none';
      }, 500);
    }
  }, 2000);

  // Inizializza l'app
  App.init();
});