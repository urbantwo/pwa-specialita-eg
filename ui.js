/**
 * UI.JS - Gestione rendering interfaccia
 * 
 * Questo file contiene tutte le funzioni per mostrare
 * i componenti dell'interfaccia utente
 */

window.UI = {
  /**
   * Renderizza una card per specialità o brevetto
   */
  renderCard: function(item, isBrevetto = false) {
    const isFavorite = AppState.isFavorite(item.id);
    
    return `
      <div class="card ${isBrevetto ? 'brevetto' : ''} ${isFavorite ? 'favorite' : ''}" 
           onclick="App.showDetail('${item.id}', '${isBrevetto ? 'brevetto' : 'specialita'}')">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                onclick="event.stopPropagation(); App.toggleFavorite('${item.id}')">
          ❤
        </button>
        <div class="card-icon">${item.icona}</div>
        <div class="card-title">${item.nome}</div>
        <div class="card-type">${isBrevetto ? 'Brevetto' : 'Specialità'}</div>
      </div>
    `;
  },

  /**
   * Renderizza la griglia di cards
   */
  renderCardsGrid: function(items, isBrevetto = false) {
    if (items.length === 0) {
      return this.renderEmptyState();
    }
    
    const cardsHtml = items.map(item => this.renderCard(item, isBrevetto)).join('');
    return `<div class="cards-grid">${cardsHtml}</div>`;
  },

  /**
   * Renderizza lo stato vuoto
   */
  renderEmptyState: function() {
    const view = AppState.currentView;
    return `
      <div class="empty-state">
        <div class="empty-state-icon">
          ${view === 'preferiti' ? '💫' : '🔍'}
        </div>
        <div class="empty-state-text">
          ${view === 'preferiti' ? 
            'Nessun preferito ancora.<br>Aggiungi le tue specialità preferite!' : 
            'Nessun risultato trovato'}
        </div>
      </div>
    `;
  },

  /**
   * Renderizza la vista profilo con statistiche e preferiti
   */
  renderProfiloView: function(stats, favorites) {
    return `
      <div class="profilo-view">
        <!-- Sezione Header Profilo -->
        <div class="profilo-header">
          <div class="profilo-avatar">👤</div>
          <h2 class="profilo-title">Il mio percorso</h2>
          <p class="profilo-subtitle">Esplora le tue competenze</p>
        </div>

        <!-- Sezione Statistiche -->
        <div class="profilo-stats">
          <div class="stat-card total">
            <div class="stat-icon">⭐</div>
            <div class="stat-number">${stats.totale}</div>
            <div class="stat-label">Competenze salvate</div>
          </div>

          <div class="stat-card specialita">
            <div class="stat-icon">⭐</div>
            <div class="stat-number">${stats.specialita}</div>
            <div class="stat-label">Specialità</div>
            <div class="stat-progress">
              <div class="stat-progress-bar" style="width: ${stats.percentualeSpecialita}%"></div>
            </div>
            <div class="stat-percentage">${stats.percentualeSpecialita}%</div>
          </div>

          <div class="stat-card brevetti">
            <div class="stat-icon">🏆</div>
            <div class="stat-number">${stats.brevetti}</div>
            <div class="stat-label">Brevetti</div>
            <div class="stat-progress">
              <div class="stat-progress-bar" style="width: ${stats.percentualeBrevetti}%"></div>
            </div>
            <div class="stat-percentage">${stats.percentualeBrevetti}%</div>
          </div>
        </div>

        <!-- Sezione Preferiti -->
        <div class="profilo-favorites">
          <h3 class="profilo-section-title">Le tue competenze salvate</h3>
          ${favorites.length > 0 ?
            `<div class="cards-grid">${favorites.map(item => {
              const isBrevetto = item.specialitaCollegate !== undefined;
              return this.renderCard(item, isBrevetto);
            }).join('')}</div>`
            :
            `<div class="empty-state">
              <div class="empty-state-icon">💫</div>
              <div class="empty-state-text">
                Nessuna competenza salvata ancora.<br>
                Inizia esplorando Specialità e Brevetti!
              </div>
            </div>`
          }
        </div>
      </div>
    `;
  },

  /**
   * Renderizza il contenuto della vista dettaglio
   */
  renderDetailContent: function(item, type) {
    const collegamenti = type === 'brevetto' ? 
      item.specialitaCollegate.map(sid => database.specialita.find(s => s.id === sid)).filter(Boolean) :
      item.brevettiCollegati.map(bid => database.brevetti.find(b => b.id === bid)).filter(Boolean);
    
    return `
      <div class="detail-icon">${item.icona}</div>
      <div class="detail-description">${item.descrizione}</div>
      
      <div class="detail-section">
        <h3>Requisiti</h3>
        <ul class="requisiti-list">
          ${item.requisiti.map(req => `<li>${req}</li>`).join('')}
        </ul>
      </div>
      
      ${collegamenti.length > 0 ? `
        <div class="detail-section">
          <h3>${type === 'brevetto' ? 'Specialità collegate' : 'Brevetti collegati'}</h3>
          <div class="collegamenti-list">
            ${collegamenti.map(c => `
              <div class="collegamento-badge" onclick="App.showDetail('${c.id}', '${type === 'brevetto' ? 'specialita' : 'brevetto'}')">
                ${c.icona} ${c.nome}
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  },

  /**
   * Mostra il loading spinner
   */
  showLoading: function() {
    return `
      <div class="loading">
        <div class="spinner"></div>
      </div>
    `;
  },

  /**
   * Aggiorna la classe active della navbar
   */
  updateNavbar: function(activeView) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    const activeButton = document.getElementById(`nav${activeView.charAt(0).toUpperCase() + activeView.slice(1)}`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  },

  /**
   * Aggiorna il pulsante preferito nel dettaglio
   */
  updateDetailFavoriteButton: function(id) {
    const btn = document.getElementById('detailFavoriteBtn');
    if (btn) {
      if (AppState.isFavorite(id)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};
