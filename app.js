/**
 * APP.JS - Gestione logica applicazione
 * 
 * Questo file contiene la gestione dello stato e delle interazioni
 */

// State Management
window.AppState = {
  currentView: 'specialita',
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
   * Setup PWA install
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

    // Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
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

    if (AppState.currentView === 'specialita') {
      items = database.specialita;
    } else if (AppState.currentView === 'brevetti') {
      items = database.brevetti;
    } else if (AppState.currentView === 'preferiti') {
      items = [
        ...database.specialita.filter(s => AppState.isFavorite(s.id)),
        ...database.brevetti.filter(b => AppState.isFavorite(b.id))
      ];
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
