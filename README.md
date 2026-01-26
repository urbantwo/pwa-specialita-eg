# 📱 Specialità E/G - PWA AGESCI

Progressive Web App per esplorare tutte le Specialità e i Brevetti di Competenza della Branca Esploratori/Guide AGESCI.

## ✨ Caratteristiche

- ✅ **100% Offline** - Funziona completamente senza connessione
- 📱 **Installabile** - Si installa come app nativa su smartphone e tablet
- 🎨 **Design Scout** - Interfaccia ispirata ai colori e allo stile scout
- 🔍 **Ricerca veloce** - Trova rapidamente specialità e brevetti
- ❤️ **Preferiti** - Salva le tue specialità preferite
  - Cuore quasi trasparente nelle card (grigio chiaro)
  - Diventa **rosso pieno** quando selezionato
  - Ben visibile e facile da cliccare (36x36px)
- 🔗 **Collegamenti** - Naviga facilmente tra specialità e brevetti collegati
- 💾 **Dati locali** - Tutto salvato nel browser, nessun server necessario
- 🔧 **Codice modulare** - Struttura professionale e facilmente manutenibile

## 📦 Contenuto

- **65 Specialità** complete con requisiti e collegamenti ai brevetti
- **15 Brevetti di Competenza** con specialità collegate
- Icone emoji per ogni elemento
- Descrizioni dettagliate
- Sistema di navigazione mobile-first
- **Bottom navbar sempre visibile**

## 📁 Struttura del progetto

```
pwa-specialita-eg-v2/
├── index.html          # HTML principale (pulito e semantico)
├── styles.css          # Tutti gli stili CSS
├── database.js         # Database specialità e brevetti
├── ui.js              # Funzioni di rendering UI
├── app.js             # Logica applicazione e gestione stato
├── sw.js              # Service Worker (funzionalità offline)
├── manifest.json      # Configurazione PWA
├── icon-192.svg       # Icona 192x192
├── icon-512.svg       # Icona 512x512
└── .gitignore         # File da ignorare in Git
```

### 🎯 Struttura modulare

#### **database.js**
Contiene tutto il database:
- Array `specialita` con tutte le 65 specialità
- Array `brevetti` con tutti i 15 brevetti
- Dati strutturati con id, nome, icona, descrizione, requisiti, collegamenti

#### **ui.js**
Gestisce il rendering dell'interfaccia:
- `renderCard()` - Crea le card delle specialità/brevetti
- `renderCardsGrid()` - Genera la griglia di card
- `renderDetailContent()` - Mostra il dettaglio completo
- `renderEmptyState()` - Stato vuoto quando non ci sono risultati
- `updateNavbar()` - Aggiorna lo stato della navbar
- `updateDetailFavoriteButton()` - Aggiorna il pulsante preferiti

#### **app.js**
Gestisce logica e stato dell'app:
- `AppState` - Gestione stato (vista corrente, preferiti, ricerca)
- `App.init()` - Inizializzazione
- `App.showView()` - Cambio vista
- `App.toggleFavorite()` - Gestione preferiti
- `App.showDetail()` - Apertura dettaglio
- `App.setupPWA()` - Setup installazione PWA

#### **styles.css**
Tutti gli stili dell'app:
- Variabili CSS per i colori scout
- Stili per header, search, cards
- **Bottom navbar sempre visibile** (z-index 150, position fixed)
- Cuori rossi ben visibili per i preferiti
- Animazioni e transizioni
- Responsive design

## 🚀 Deploy su GitHub Pages

### 1. Crea il repository su GitHub

```bash
# Vai nella cartella del progetto
cd pwa-specialita-eg-v2

# Inizializza Git
git init
git add .
git commit -m "Initial commit - PWA Specialità EG modulare"

# Collega a GitHub (sostituisci con il TUO repository)
git remote add origin https://github.com/TUO-USERNAME/specialita-eg.git
git branch -M main
git push -u origin main
```

### 2. Attiva GitHub Pages

1. Vai su **Settings** del repository
2. Sezione **Pages** (menu laterale)
3. Source: Branch `main`, cartella `/ (root)`
4. Clicca **Save**
5. L'app sarà disponibile su: `https://TUO-USERNAME.github.io/specialita-eg/`

## 📱 Come installare l'app

### Su Android:
1. Apri il link nel browser
2. Banner "Installa app" → Installa
3. Oppure: Menu (⋮) → "Installa app"

### Su iOS:
1. Apri in Safari
2. Pulsante Condividi (⬆️)
3. "Aggiungi a Home"

### Su Desktop:
1. Apri in Chrome/Edge
2. Icona installa nella barra indirizzi
3. Oppure: Menu → "Installa..."

## 🎨 Personalizzazioni

### Cambiare i colori

In `styles.css`, modifica le variabili:

```css
:root {
  --scout-green: #2C5530;
  --scout-red: #C1403D;      /* Colore cuori preferiti */
  --scout-beige: #E8DCC4;
  /* ... */
}
```

### Aggiungere una specialità

In `database.js`:

```javascript
database.specialita.push({
  id: 'nuova-specialita',
  nome: 'Nome Specialità',
  icona: '🎯',
  descrizione: 'Descrizione...',
  requisiti: [
    'Requisito 1',
    'Requisito 2'
  ],
  brevettiCollegati: ['id-brevetto']
});
```

### Modificare le card

In `ui.js`, nella funzione `renderCard()`:
- Cambia l'HTML generato
- Modifica gli stili in `styles.css` (classe `.card`)

### Modificare la navbar

La navbar è **sempre visibile** grazie a:
- `position: fixed` in `.bottom-nav`
- `z-index: 150` per stare sopra al contenuto
- `bottom: 0` per ancorarla in basso
- `padding-bottom` sul body per evitare sovrapposizioni

## 🔧 Test locale

```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js
npx serve .

# Apri: http://localhost:8000
```

## ✨ Miglioramenti rispetto alla versione precedente

1. ✅ **Codice modulare**: 3 file JS separati (database, ui, app)
2. ✅ **CSS separato**: Tutti gli stili in un file esterno
3. ✅ **Cuori trasparenti**: 
   - Quasi invisibili nelle card (rgba con opacity 0.4)
   - Diventano rosso pieno quando selezionati
   - Effetto hover per feedback visivo
4. ✅ **Bottom nav sempre visibile**: Fixed position, z-index alto
5. ✅ **Coerenza icone**: Cuori ovunque (card e navbar)
6. ✅ **Codice pulito**: HTML semantico, funzioni ben organizzate
7. ✅ **Manutenibilità**: Facile modificare ogni parte dell'app

## 🐛 Troubleshooting

**L'app non si installa**
→ Verifica HTTPS (GitHub Pages lo fa automaticamente)

**Navbar si sovrappone al contenuto**
→ Il body ha già `padding-bottom` per evitarlo

**I preferiti non si salvano**
→ Controlla che localStorage sia abilitato

**Modifiche non visibili**
→ Svuota cache: Ctrl+Shift+R (Win) o Cmd+Shift+R (Mac)
→ Incrementa versione in `sw.js`: `CACHE_NAME = 'specialita-eg-v3'`

## 📝 Licenza

Progetto educativo scout. I contenuti delle Specialità e Brevetti sono proprietà di AGESCI.

---

**Estote Parati!** 🏕️

Made with ❤️ for scouts
