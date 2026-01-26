# 🚀 GUIDA COMPLETA AL DEPLOY - PWA Specialità EG

## 📋 Indice

1. [Prerequisiti](#prerequisiti)
2. [Preparazione file](#preparazione-file)
3. [Creazione repository GitHub](#creazione-repository-github)
4. [Caricamento dei file](#caricamento-dei-file)
5. [Attivazione GitHub Pages](#attivazione-github-pages)
6. [Test e verifica](#test-e-verifica)
7. [Aggiornamenti futuri](#aggiornamenti-futuri)
8. [Troubleshooting](#troubleshooting)

---

## 1️⃣ Prerequisiti

### Cosa ti serve:

✅ **Account GitHub**
- Se non ce l'hai: vai su [github.com](https://github.com) e clicca "Sign up"
- È completamente gratuito

✅ **Git installato** (per caricare da terminale)
- Windows: Scarica da [git-scm.com](https://git-scm.com)
- Mac: Già installato, oppure `brew install git`
- Linux: `sudo apt install git` o `sudo yum install git`

**Alternativa senza Git**: Puoi caricare i file direttamente da browser (vedi sezione 4B)

---

## 2️⃣ Preparazione file

### Passo 1: Scarica tutti i file

Scarica questi 12 file dalla PWA:

**File essenziali (devono essere tutti nella stessa cartella):**
```
✅ index.html
✅ styles.css
✅ database.js
✅ ui.js
✅ app.js
✅ sw.js
✅ manifest.json
✅ icon-192.svg
✅ icon-512.svg
✅ .gitignore
✅ README.md
✅ GUIDA_RAPIDA.md (opzionale)
```

### Passo 2: Organizza i file

Crea una cartella sul tuo computer:
```
📁 specialita-eg/
   ├── 📄 index.html
   ├── 📄 styles.css
   ├── 📄 database.js
   ├── 📄 ui.js
   ├── 📄 app.js
   ├── 📄 sw.js
   ├── 📄 manifest.json
   ├── 🖼️ icon-192.svg
   ├── 🖼️ icon-512.svg
   ├── 📄 .gitignore
   ├── 📄 README.md
   └── 📄 GUIDA_RAPIDA.md
```

**IMPORTANTE**: Tutti i file devono stare nella **STESSA CARTELLA**, non in sottocartelle!

---

## 3️⃣ Creazione repository GitHub

### Passo 1: Vai su GitHub

1. Apri [github.com](https://github.com)
2. Fai login con il tuo account
3. Clicca sul pulsante **"+"** in alto a destra
4. Seleziona **"New repository"**

### Passo 2: Configura il repository

Compila il form così:

```
Repository name: specialita-eg
(puoi scegliere un altro nome, ma evita spazi e caratteri speciali)

Description: PWA Specialità e Brevetti EG AGESCI
(opzionale ma consigliato)

Public ✅ (selezionato)
(GitHub Pages gratuito funziona solo con repository pubblici)

☐ Add a README file (NON selezionare, ce l'hai già)
☐ Add .gitignore (NON selezionare, ce l'hai già)
☐ Choose a license (lascia "None")
```

### Passo 3: Crea il repository

Clicca sul pulsante verde **"Create repository"**

📝 **Annota l'URL del repository**, sarà tipo:
```
https://github.com/TUO-USERNAME/specialita-eg.git
```

---

## 4️⃣ Caricamento dei file

Hai **DUE OPZIONI**: via terminale (A) o via browser (B)

---

### 📦 OPZIONE A: Caricamento via Terminale (consigliato)

#### Passo 1: Apri il terminale

- **Windows**: Cerca "Git Bash" o "PowerShell"
- **Mac**: Apri "Terminale"
- **Linux**: Apri il terminale

#### Passo 2: Vai nella cartella del progetto

```bash
cd /percorso/alla/cartella/specialita-eg
```

**Esempio Windows:**
```bash
cd C:\Users\TuoNome\Desktop\specialita-eg
```

**Esempio Mac/Linux:**
```bash
cd ~/Desktop/specialita-eg
```

#### Passo 3: Verifica di essere nella cartella giusta

```bash
ls
# oppure su Windows:
dir
```

Dovresti vedere i 12 file elencati.

#### Passo 4: Inizializza Git

```bash
git init
```

Vedrai: `Initialized empty Git repository in ...`

#### Passo 5: Aggiungi tutti i file

```bash
git add .
```

Il punto (`.`) significa "aggiungi tutti i file"

#### Passo 6: Fai il primo commit

```bash
git commit -m "Initial commit - PWA Specialità EG"
```

Vedrai l'elenco dei file aggiunti.

#### Passo 7: Collega al repository GitHub

Sostituisci `TUO-USERNAME` e `specialita-eg` con i tuoi dati:

```bash
git remote add origin https://github.com/TUO-USERNAME/specialita-eg.git
```

#### Passo 8: Cambia branch a "main"

```bash
git branch -M main
```

#### Passo 9: Carica tutto su GitHub

```bash
git push -u origin main
```

Ti chiederà username e password GitHub:
- **Username**: il tuo username GitHub
- **Password**: usa un **Personal Access Token** (non la password dell'account)

**Come creare un token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Spunta: `repo` (tutti i permessi del repository)
4. "Generate token"
5. **COPIA IL TOKEN** (lo vedrai una sola volta!)
6. Usalo come password quando fai `git push`

✅ **Fatto!** I file sono su GitHub.

---

### 🌐 OPZIONE B: Caricamento via Browser (alternativa)

#### Passo 1: Vai nel tuo repository

Apri: `https://github.com/TUO-USERNAME/specialita-eg`

#### Passo 2: Carica i file

1. Clicca **"Add file"** → **"Upload files"**
2. **Trascina tutti i 12 file** nella finestra
   (o clicca "choose your files")
3. Aspetta che finisca il caricamento
4. Scrivi un messaggio: `Initial commit - PWA Specialità EG`
5. Clicca **"Commit changes"**

✅ **Fatto!** I file sono su GitHub.

---

## 5️⃣ Attivazione GitHub Pages

### Passo 1: Vai nelle Settings

1. Nel tuo repository, clicca su **"Settings"** (in alto a destra)
2. Nel menu laterale sinistro, clicca su **"Pages"**

### Passo 2: Configura GitHub Pages

Nella sezione **"Build and deployment"**:

```
Source: Deploy from a branch ✅

Branch:
┌─────────────┬─────────┐
│ main      ▼ │ /(root) ▼│ [Save]
└─────────────┴─────────┘
```

1. Seleziona **"main"** dal primo menu a tendina
2. Seleziona **"/ (root)"** dal secondo menu
3. Clicca **"Save"**

### Passo 3: Aspetta il deploy

Vedrai un banner blu:
```
✓ GitHub Pages source saved
```

Dopo 1-3 minuti, ricarica la pagina e vedrai:
```
✓ Your site is live at https://TUO-USERNAME.github.io/specialita-eg/
```

🎉 **L'app è online!**

---

## 6️⃣ Test e verifica

### Passo 1: Apri l'app

Vai su: `https://TUO-USERNAME.github.io/specialita-eg/`

### Passo 2: Verifica che funzioni

✅ Vedi le card delle specialità?
✅ La ricerca funziona?
✅ I cuori cambiano colore quando li clicchi?
✅ La navbar in basso è sempre visibile?
✅ Puoi aprire il dettaglio di una specialità?

### Passo 3: Testa l'installazione

#### Su smartphone:
1. Apri l'URL nel browser
2. Dovrebbe apparire il banner "Installa app"
3. Oppure: Menu → "Installa app" / "Aggiungi a Home"

#### Su desktop:
1. Apri l'URL in Chrome
2. Cerca l'icona di installazione nella barra degli indirizzi
3. Oppure: Menu (⋮) → "Installa Specialità EG..."

### Passo 4: Testa offline

1. Apri l'app installata
2. Attiva la modalità aereo (o disabilita WiFi)
3. L'app dovrebbe funzionare lo stesso! ✈️

---

## 7️⃣ Aggiornamenti futuri

### Quando modifichi l'app:

#### Via terminale:

```bash
# 1. Modifica i file sul tuo computer

# 2. Vai nella cartella del progetto
cd /percorso/alla/cartella/specialita-eg

# 3. Aggiungi le modifiche
git add .

# 4. Fai il commit con un messaggio descrittivo
git commit -m "Aggiunta specialità Programmatore"

# 5. Carica su GitHub
git push
```

#### Via browser:

1. Vai nel repository su GitHub
2. Clicca sul file da modificare
3. Clicca l'icona della matita (✏️) "Edit this file"
4. Fai le modifiche
5. Scorri in basso → "Commit changes"
6. Clicca "Commit changes"

⏱️ L'app si aggiorna automaticamente in 1-2 minuti!

### Incrementa versione cache:

Quando modifichi `styles.css`, `database.js`, `ui.js`, o `app.js`:

Apri `sw.js` e cambia:
```javascript
const CACHE_NAME = 'specialita-eg-v2';
```
in:
```javascript
const CACHE_NAME = 'specialita-eg-v3';  // ← Incrementa il numero
```

Questo forza il browser a ricaricare i file aggiornati.

---

## 8️⃣ Troubleshooting

### ❌ "404 - File not found"

**Causa**: GitHub Pages non trova il file index.html

**Soluzione**:
1. Verifica che `index.html` sia nella root del repository
2. Non deve essere in una sottocartella!
3. Vai su GitHub → repository → dovresti vedere `index.html` in elenco

### ❌ "L'app non si carica correttamente"

**Causa**: I file CSS/JS non vengono trovati

**Soluzione**:
1. Verifica che TUTTI i file siano nella stessa cartella
2. Controlla che i nomi siano esatti (minuscole/maiuscole)
3. Nel browser, apri Console (F12) e cerca errori 404

### ❌ "L'app non si installa"

**Causa**: Manca un file o configurazione PWA

**Soluzione**:
1. Verifica che `manifest.json` sia presente
2. Verifica che `sw.js` sia presente
3. Verifica che le icone SVG siano presenti
4. GitHub Pages deve servire via HTTPS (lo fa automaticamente)

### ❌ "Le modifiche non si vedono"

**Causa**: Cache del browser

**Soluzione**:
1. **Hard refresh**: Ctrl+Shift+R (Win) o Cmd+Shift+R (Mac)
2. Oppure: Svuota cache → F12 → Application → Clear storage
3. Incrementa versione in `sw.js` (vedi sopra)
4. Se installata, disinstalla e reinstalla l'app

### ❌ "I preferiti non si salvano"

**Causa**: localStorage disabilitato

**Soluzione**:
1. Controlla che il browser permetta localStorage
2. Non usare modalità incognito (cancella tutto alla chiusura)
3. Prova in un browser diverso

### ❌ "Git push chiede la password"

**Causa**: GitHub ha disabilitato l'autenticazione tramite password

**Soluzione**:
Usa un **Personal Access Token** invece della password:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. "Generate new token (classic)"
4. Spunta: `repo`
5. "Generate token"
6. Usa il token come password

---

## 📊 Checklist completa

Prima del deploy:
- [ ] Scaricati tutti i 12 file
- [ ] Tutti i file nella stessa cartella
- [ ] Account GitHub creato
- [ ] Git installato (opzionale)

Durante il deploy:
- [ ] Repository creato su GitHub
- [ ] File caricati (via terminale o browser)
- [ ] GitHub Pages attivato
- [ ] URL dell'app annotato

Dopo il deploy:
- [ ] App testata nel browser
- [ ] Ricerca funziona
- [ ] Preferiti funzionano
- [ ] Navbar sempre visibile
- [ ] App installabile
- [ ] Funziona offline

---

## 🎓 Comandi Git utili

```bash
# Stato del repository (file modificati, ecc.)
git status

# Vedere la cronologia dei commit
git log

# Annullare modifiche non committate
git checkout -- nome-file.js

# Vedere le differenze
git diff

# Scaricare aggiornamenti dal repository
git pull

# Vedere i repository remoti collegati
git remote -v
```

---

## 📞 Supporto

### Se hai problemi:

1. **Controlla questa guida** - la soluzione è probabilmente qui
2. **Console del browser** (F12) - mostra eventuali errori
3. **GitHub Actions** - vai su GitHub → Actions per vedere log deploy
4. **Community** - cerca su Stack Overflow o GitHub Discussions

### Link utili:

- 📚 [Documentazione GitHub Pages](https://docs.github.com/pages)
- 📚 [Guida Git](https://git-scm.com/book/it/v2)
- 📚 [PWA Documentation](https://web.dev/progressive-web-apps/)

---

## 🎉 Congratulazioni!

La tua PWA è online e funzionante! 🏕️

**URL da condividere:**
```
https://TUO-USERNAME.github.io/specialita-eg/
```

Condividilo con i ragazzi del reparto e fagli installare l'app sui loro dispositivi!

**Buona caccia!** ⭐

---

**Estote Parati!** 🏕️
