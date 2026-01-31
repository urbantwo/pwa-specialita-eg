/**
 * DATABASE SPECIALITÀ E BREVETTI EG
 * 
 * Questo file contiene tutti i dati delle Specialità e dei Brevetti
 * della Branca Esploratori/Guide AGESCI
 */

window.database = {
  specialita: [
    {
      id: 'allevatore',
      nome: 'Allevatore',
      icona: '🐔',
      descrizione: 'L\'allevatore ama veder crescere gli animali che segue con impegno quotidiano, conosce le principali caratteristiche dell\'animale che alleva e l\'alimentazione più adatta per la sua crescita.',
      requisiti: [
        'Conoscere le principali caratteristiche dell\'animale che alleva e l\'alimentazione più adatta',
        'Saper curare la progettazione o manutenzione del luogo dove vive l\'animale',
        'Saper somministrare prodotti per la cura degli animali',
        'Saper compilare una scheda sanitaria degli animali che alleva',
        'Conoscere le prescrizioni dell\'ufficio veterinario del Comune'
      ],
      brevettiCollegati: ['amico-della-natura']
    },
    {
      id: 'alpinista',
      nome: 'Alpinista',
      icona: '⛰️',
      descrizione: 'Conosce e sa muoversi con sicurezza nell\'ambiente montano. Conosce i principali nodi e manovre di corda, le attrezzature e i materiali utilizzati in montagna.',
      requisiti: [
        'Conoscere i principali nodi e manovre di corda, le attrezzature e i materiali utilizzati in montagna',
        'Avere nozioni di topografia, geologia, meteorologia e primo soccorso',
        'Sapersi orientare in montagna e valutare il tempo necessario per un percorso',
        'Saper evitare o fronteggiare i principali pericoli delle attività in montagna',
        'Saper equipaggiare se stesso e gli altri in modo adeguato per un\'uscita in montagna'
      ],
      brevettiCollegati: ['guida-alpina', 'amico-della-natura']
    },
    {
      id: 'amico-animali',
      nome: 'Amico degli animali',
      icona: '🐕',
      descrizione: 'È un appassionato della vita degli animali; li ama, e ne cura uno in particolare. Conosce le principali caratteristiche dell\'animale prescelto e dimostra attenzione e rispetto per l\'ambiente degli animali.',
      requisiti: [
        'Conoscere le principali caratteristiche dell\'animale prescelto',
        'Conoscere la struttura delle più importanti associazioni di tutela degli animali',
        'Conoscere l\'indirizzo dell\'ufficio veterinario più vicino del Comune',
        'Conoscere i principali parchi regionali e nazionali',
        'Dimostrare attenzione e rispetto per l\'ambiente degli animali durante le attività scout'
      ],
      brevettiCollegati: ['amico-della-natura']
    },
    {
      id: 'amico-quartiere',
      nome: 'Amico del quartiere',
      icona: '🏘️',
      descrizione: 'Conosce il proprio territorio e si impegna per migliorarlo',
      requisiti: [
        'Conoscere la storia e le caratteristiche del proprio quartiere',
        'Aver realizzato un servizio concreto per la comunità locale',
        'Conoscere le principali istituzioni e servizi del territorio',
        'Saper coinvolgere altri nel miglioramento del quartiere',
        'Aver documentato e mappato le risorse e i bisogni del territorio'
      ],
      brevettiCollegati: ['cittadino-mondo']
    },
    {
      id: 'archeologo',
      nome: 'Archeologo',
      icona: '🏺',
      descrizione: 'Conosce le tecniche di ricerca storica e archeologica',
      requisiti: [
        'Conoscere i metodi di ricerca archeologica e storica',
        'Aver visitato almeno tre siti archeologici o musei',
        'Saper documentare e catalogare reperti o fonti storiche',
        'Conoscere le principali epoche storiche del proprio territorio',
        'Aver realizzato una ricerca o un progetto su un tema storico'
      ],
      brevettiCollegati: ['giornalista']
    },
    {
      id: 'artigiano',
      nome: 'Artigiano',
      icona: '🔨',
      descrizione: 'Sa lavorare materiali diversi con tecniche artigianali',
      requisiti: [
        'Conoscere le tecniche di lavorazione di almeno due materiali diversi',
        'Aver realizzato almeno tre oggetti artigianali completi',
        'Conoscere e saper usare correttamente gli strumenti del mestiere',
        'Conoscere le norme di sicurezza nel lavoro artigianale',
        'Saper trasmettere ad altri le tecniche apprese'
      ],
      brevettiCollegati: ['mani-abili', 'artista']
    },
    {
      id: 'artista-strada',
      nome: 'Artista di strada',
      icona: '🎪',
      descrizione: 'Sa esibirsi in spazi pubblici con varie forme d\'arte',
      requisiti: [
        'Conoscere e praticare almeno due forme di arte di strada',
        'Aver preparato e realizzato almeno tre esibizioni pubbliche',
        'Saper coinvolgere il pubblico durante le performance',
        'Conoscere le norme per esibirsi negli spazi pubblici',
        'Saper organizzare e gestire uno spettacolo di strada'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'astronomo',
      nome: 'Astronomo',
      icona: '🔭',
      descrizione: 'Conosce il cielo e sa orientarsi con le stelle',
      requisiti: [
        'Conoscere le principali costellazioni visibili nel proprio emisfero',
        'Saper riconoscere i pianeti del sistema solare',
        'Saper usare una carta del cielo e orientarsi con le stelle',
        'Conoscere i principali fenomeni astronomici',
        'Aver condotto osservazioni astronomiche documentate'
      ],
      brevettiCollegati: ['naturalista']
    },
    {
      id: 'atleta',
      nome: 'Atleta',
      icona: '🏃',
      descrizione: 'Pratica attività sportive con costanza e impegno',
      requisiti: [
        'Praticare regolarmente almeno uno sport',
        'Conoscere le regole e le tecniche dello sport praticato',
        'Aver partecipato a competizioni o allenamenti strutturati',
        'Conoscere i principi di una corretta alimentazione sportiva',
        'Saper preparare un piano di allenamento progressivo'
      ],
      brevettiCollegati: ['animatore-sportivo', 'trappeur']
    },
    {
      id: 'attore',
      nome: 'Attore',
      icona: '🎭',
      descrizione: 'Sa recitare e mettere in scena spettacoli teatrali',
      requisiti: [
        'Conoscere le tecniche base della recitazione',
        'Aver partecipato alla realizzazione di almeno tre spettacoli',
        'Saper interpretare personaggi diversi',
        'Conoscere le fasi di preparazione di uno spettacolo',
        'Saper lavorare in gruppo nella realizzazione teatrale'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'battelliere',
      nome: 'Battelliere',
      icona: '🚣',
      descrizione: 'Sa condurre imbarcazioni a remi',
      requisiti: [
        'Conoscere le parti di una barca a remi',
        'Saper remare correttamente e manovrare l\'imbarcazione',
        'Conoscere le norme di sicurezza in acqua',
        'Saper leggere le condizioni meteorologiche e dell\'acqua',
        'Aver compiuto diverse uscite in barca'
      ],
      brevettiCollegati: ['esploratore-acque']
    },
    {
      id: 'boscaiolo',
      nome: 'Boscaiolo',
      icona: '🪓',
      descrizione: 'Conosce il bosco e sa lavorare con il legno',
      requisiti: [
        'Conoscere gli alberi e le piante del bosco',
        'Saper usare correttamente accetta, sega e altri attrezzi',
        'Conoscere le norme di sicurezza nel taglio del legno',
        'Saper preparare legna da ardere in modo corretto',
        'Conoscere i principi di gestione sostenibile del bosco'
      ],
      brevettiCollegati: ['trappeur', 'pioniere', 'naturalista']
    },
    {
      id: 'botanico',
      nome: 'Botanico',
      icona: '🌿',
      descrizione: 'Conosce le piante e la loro classificazione',
      requisiti: [
        'Saper riconoscere almeno 30 piante del proprio territorio',
        'Conoscere le caratteristiche delle principali famiglie botaniche',
        'Saper realizzare un erbario secondo criteri scientifici',
        'Conoscere gli usi tradizionali e moderni delle piante',
        'Aver condotto osservazioni sul ciclo vitale delle piante'
      ],
      brevettiCollegati: ['naturalista']
    },
    {
      id: 'campeggiatore',
      nome: 'Campeggiatore',
      icona: '⛺',
      descrizione: 'È esperto di vita all\'aria aperta e tecniche di campeggio',
      requisiti: [
        'Aver fatto almeno 20 notti in tenda (condizione imprescindibile)',
        'Aver progettato e realizzato un hike con pernotto',
        'Conoscere nodi, legature e costruzioni da campo',
        'Saper cucinare alla trapper',
        'Aver costruito un riparo di fortuna e averci dormito',
        'Conoscere pronto soccorso, orientamento, sopravvivenza e meteo'
      ],
      brevettiCollegati: ['trappeur', 'pioniere', 'sherpa']
    },
    {
      id: 'canoista',
      nome: 'Canoista',
      icona: '🛶',
      descrizione: 'Sa condurre una canoa in sicurezza',
      requisiti: [
        'Conoscere le parti della canoa e le tecniche di voga',
        'Saper manovrare la canoa in diverse condizioni',
        'Conoscere le norme di sicurezza in acqua',
        'Saper effettuare il recupero in caso di ribaltamento',
        'Aver compiuto diverse uscite in canoa'
      ],
      brevettiCollegati: ['esploratore-acque']
    },
    {
      id: 'cantante',
      nome: 'Cantante',
      icona: '🎤',
      descrizione: 'Sa cantare e ha un repertorio di canti',
      requisiti: [
        'Conoscere le tecniche base del canto',
        'Avere un repertorio di almeno 20 canti scout e non',
        'Saper animare fuochi di bivacco e momenti comunitari',
        'Conoscere la storia di alcuni canti scout',
        'Saper insegnare canti ad altri'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'carpentiere-navale',
      nome: 'Carpentiere navale',
      icona: '⚓',
      descrizione: 'Sa costruire e riparare imbarcazioni',
      requisiti: [
        'Conoscere i materiali usati nella costruzione navale',
        'Saper realizzare piccole imbarcazioni o modelli',
        'Conoscere le tecniche di manutenzione delle barche',
        'Saper effettuare riparazioni su imbarcazioni',
        'Conoscere le parti e le caratteristiche delle diverse imbarcazioni'
      ],
      brevettiCollegati: ['esploratore-acque', 'mani-abili']
    },
    {
      id: 'ciclista',
      nome: 'Ciclista',
      icona: '🚴',
      descrizione: 'Sa viaggiare in bicicletta e mantenerla efficiente',
      requisiti: [
        'Saper condurre la bicicletta in sicurezza su diversi terreni',
        'Conoscere la manutenzione ordinaria della bicicletta',
        'Saper effettuare riparazioni di base',
        'Aver compiuto diverse uscite in bicicletta',
        'Conoscere le norme del codice della strada per ciclisti'
      ],
      brevettiCollegati: ['sherpa']
    },
    {
      id: 'collezionista',
      nome: 'Collezionista',
      icona: '💎',
      descrizione: 'Sa organizzare e curare una collezione',
      requisiti: [
        'Avere una collezione organizzata e catalogata',
        'Conoscere i criteri di classificazione degli oggetti collezionati',
        'Saper documentare e presentare la propria collezione',
        'Conoscere il valore storico o culturale degli oggetti',
        'Saper condividere con altri la passione per il collezionismo'
      ],
      brevettiCollegati: ['giornalista']
    },
    {
      id: 'coltivatore',
      nome: 'Coltivatore',
      icona: '🌾',
      descrizione: 'Sa coltivare piante e ortaggi',
      requisiti: [
        'Conoscere le tecniche di coltivazione biologica',
        'Aver coltivato un orto o un giardino per almeno una stagione',
        'Saper riconoscere le esigenze delle diverse piante',
        'Conoscere il ciclo delle stagioni e le semine',
        'Saper preparare il terreno e concimare in modo naturale'
      ],
      brevettiCollegati: ['naturalista']
    },
    {
      id: 'corrispondente',
      nome: 'Corrispondente',
      icona: '✉️',
      descrizione: 'Sa scrivere testi e comunicare efficacemente',
      requisiti: [
        'Conoscere le diverse forme di scrittura e comunicazione',
        'Saper scrivere articoli, lettere, relazioni',
        'Aver pubblicato o condiviso almeno cinque testi scritti',
        'Conoscere le regole della buona scrittura',
        'Saper adattare lo stile al destinatario e al mezzo'
      ],
      brevettiCollegati: ['giornalista']
    },
    {
      id: 'corrispondente-radio',
      nome: 'Corrispondente radio',
      icona: '📻',
      descrizione: 'Sa comunicare via radio e conosce il codice Morse',
      requisiti: [
        'Conoscere il codice Morse e saperlo trasmettere/ricevere',
        'Conoscere le procedure di comunicazione radio',
        'Saper usare una radio ricetrasmittente',
        'Conoscere l\'alfabeto fonetico internazionale',
        'Aver stabilito contatti radio documentati'
      ],
      brevettiCollegati: ['maestro-tecnologie']
    },
    {
      id: 'cuoco',
      nome: 'Cuoco',
      icona: '👨‍🍳',
      descrizione: 'Sa cucinare per sé e per gli altri in diverse situazioni',
      requisiti: [
        'Conoscere i principi di una sana alimentazione',
        'Saper cucinare almeno 15 piatti diversi',
        'Saper cucinare alla trapper e con fuochi da campo',
        'Conoscere le norme di igiene alimentare',
        'Saper organizzare i pasti per un gruppo'
      ],
      brevettiCollegati: ['trappeur']
    },
    {
      id: 'danzatore',
      nome: 'Danzatore',
      icona: '💃',
      descrizione: 'Sa danzare e insegnare danze',
      requisiti: [
        'Conoscere almeno 10 danze di tradizioni diverse',
        'Saper insegnare danze ad altri',
        'Aver animato momenti comunitari con le danze',
        'Conoscere la storia e il significato delle danze',
        'Saper coreografare semplici danze'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'disegnatore',
      nome: 'Disegnatore',
      icona: '✏️',
      descrizione: 'Sa disegnare e rappresentare graficamente idee',
      requisiti: [
        'Conoscere le tecniche base del disegno',
        'Saper usare diverse tecniche e materiali',
        'Aver realizzato un portfolio di disegni',
        'Saper disegnare dal vero e dalla fantasia',
        'Saper usare il disegno per comunicare idee'
      ],
      brevettiCollegati: ['artista', 'grafico-multimediale']
    },
    {
      id: 'elettricista',
      nome: 'Elettricista',
      icona: '⚡',
      descrizione: 'Conosce l\'elettricità e sa eseguire impianti base',
      requisiti: [
        'Conoscere i principi dell\'elettricità',
        'Saper eseguire semplici impianti elettrici in sicurezza',
        'Conoscere le norme di sicurezza elettrica',
        'Saper leggere schemi elettrici',
        'Saper effettuare riparazioni elettriche base'
      ],
      brevettiCollegati: ['mani-abili', 'maestro-tecnologie']
    },
    {
      id: 'elettronico',
      nome: 'Elettronico',
      icona: '🔌',
      descrizione: 'Conosce l\'elettronica e sa realizzare circuiti',
      requisiti: [
        'Conoscere i componenti elettronici e il loro funzionamento',
        'Saper leggere schemi elettronici',
        'Aver realizzato almeno tre circuiti elettronici',
        'Saper usare strumenti di misura elettronici',
        'Conoscere le applicazioni dell\'elettronica'
      ],
      brevettiCollegati: ['maestro-tecnologie']
    },
    {
      id: 'esperto-computer',
      nome: 'Esperto del computer',
      icona: '💻',
      descrizione: 'Sa usare il computer in modo avanzato',
      requisiti: [
        'Conoscere i principali programmi e applicazioni',
        'Saper risolvere problemi informatici comuni',
        'Conoscere i principi della programmazione',
        'Saper usare Internet in modo sicuro e consapevole',
        'Aver realizzato progetti informatici'
      ],
      brevettiCollegati: ['maestro-tecnologie', 'grafico-multimediale']
    },
    {
      id: 'europeista',
      nome: 'Europeista',
      icona: '🇪🇺',
      descrizione: 'Conosce l\'Europa, le sue istituzioni e culture',
      requisiti: [
        'Conoscere la storia dell\'integrazione europea',
        'Conoscere le principali istituzioni europee',
        'Aver studiato almeno tre paesi europei',
        'Conoscere le lingue e culture europee',
        'Aver partecipato a scambi o gemellaggi internazionali'
      ],
      brevettiCollegati: ['cittadino-mondo']
    },
    {
      id: 'falegname',
      nome: 'Falegname',
      icona: '🪚',
      descrizione: 'Sa lavorare il legno e costruire oggetti in legno',
      requisiti: [
        'Conoscere i diversi tipi di legno e le loro caratteristiche',
        'Saper usare gli attrezzi da falegname in sicurezza',
        'Aver realizzato almeno tre oggetti in legno',
        'Conoscere le tecniche di assemblaggio del legno',
        'Saper effettuare finiture e trattamenti del legno'
      ],
      brevettiCollegati: ['mani-abili', 'pioniere']
    },
    {
      id: 'fatutto',
      nome: 'Fa tutto',
      icona: '🔧',
      descrizione: 'Sa eseguire piccole riparazioni e manutenzioni',
      requisiti: [
        'Conoscere i principali attrezzi e il loro uso',
        'Saper effettuare riparazioni domestiche comuni',
        'Conoscere le norme di sicurezza nel fai-da-te',
        'Aver documentato almeno 10 riparazioni eseguite',
        'Saper organizzare e mantenere una cassetta degli attrezzi'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'folclorista',
      nome: 'Folclorista',
      icona: '🎻',
      descrizione: 'Conosce le tradizioni popolari e sa valorizzarle',
      requisiti: [
        'Conoscere le tradizioni del proprio territorio',
        'Aver raccolto e documentato tradizioni popolari',
        'Saper raccontare storie e leggende tradizionali',
        'Conoscere danze, canti e giochi popolari',
        'Aver organizzato eventi per valorizzare il folclore'
      ],
      brevettiCollegati: ['cittadino-mondo', 'artista']
    },
    {
      id: 'fotografo',
      nome: 'Fotografo',
      icona: '📷',
      descrizione: 'Sa fotografare e ha conoscenze tecniche fotografiche',
      requisiti: [
        'Conoscere le tecniche fotografiche di base',
        'Saper usare una macchina fotografica in modo creativo',
        'Aver realizzato un portfolio fotografico',
        'Conoscere i principi di composizione fotografica',
        'Saper elaborare e presentare le proprie fotografie'
      ],
      brevettiCollegati: ['giornalista', 'grafico-multimediale']
    },
    {
      id: 'geologo',
      nome: 'Geologo',
      icona: '🪨',
      descrizione: 'Conosce rocce, minerali e fenomeni geologici',
      requisiti: [
        'Saper riconoscere le principali rocce e minerali',
        'Conoscere i fenomeni geologici del proprio territorio',
        'Aver realizzato una collezione geologica catalogata',
        'Conoscere la storia geologica della propria regione',
        'Aver compiuto escursioni geologiche documentate'
      ],
      brevettiCollegati: ['naturalista']
    },
    {
      id: 'giardiniere',
      nome: 'Giardiniere',
      icona: '🌻',
      descrizione: 'Sa curare giardini e aree verdi',
      requisiti: [
        'Conoscere le piante ornamentali e le loro esigenze',
        'Saper progettare e realizzare un piccolo giardino',
        'Conoscere le tecniche di potatura e manutenzione',
        'Saper preparare il terreno e concimare',
        'Aver curato un giardino per almeno una stagione'
      ],
      brevettiCollegati: ['naturalista']
    },
    {
      id: 'giocattolaio',
      nome: 'Giocattolaio',
      icona: '🧸',
      descrizione: 'Sa costruire giocattoli e giochi',
      requisiti: [
        'Aver costruito almeno 10 giocattoli diversi',
        'Conoscere i materiali adatti alla costruzione di giocattoli',
        'Saper progettare giocattoli sicuri e funzionali',
        'Conoscere giochi tradizionali e saperli insegnare',
        'Aver organizzato momenti ludici per bambini'
      ],
      brevettiCollegati: ['mani-abili', 'artista']
    },
    {
      id: 'grafico',
      nome: 'Grafico',
      icona: '🎨',
      descrizione: 'Sa realizzare elaborati grafici e impaginazioni',
      requisiti: [
        'Conoscere i principi della grafica e dell\'impaginazione',
        'Saper usare programmi di grafica',
        'Aver realizzato prodotti grafici completi',
        'Conoscere tipografia e teoria del colore',
        'Saper progettare elementi di comunicazione visiva'
      ],
      brevettiCollegati: ['grafico-multimediale', 'artista']
    },
    {
      id: 'guida',
      nome: 'Guida',
      icona: '🧭',
      descrizione: 'Sa accompagnare e guidare gruppi sul territorio',
      requisiti: [
        'Conoscere approfonditamente il proprio territorio',
        'Saper organizzare e condurre escursioni',
        'Conoscere la storia e le caratteristiche naturali del territorio',
        'Saper comunicare in modo efficace con il gruppo',
        'Aver guidato almeno cinque escursioni documentate'
      ],
      brevettiCollegati: ['sherpa', 'cittadino-mondo']
    },
    {
      id: 'guida-marina',
      nome: 'Guida marina',
      icona: '🌊',
      descrizione: 'Sa condurre gruppi in ambiente marino',
      requisiti: [
        'Conoscere l\'ambiente marino e costiero',
        'Saper navigare e orientarsi in mare',
        'Conoscere le norme di sicurezza in mare',
        'Saper leggere le condizioni meteo marine',
        'Aver condotto escursioni marine documentate'
      ],
      brevettiCollegati: ['esploratore-acque']
    },
    {
      id: 'hebertista',
      nome: 'Hebertista',
      icona: '🤸',
      descrizione: 'Pratica il metodo naturale di educazione fisica',
      requisiti: [
        'Conoscere il metodo Hébert',
        'Saper praticare le diverse famiglie di esercizi',
        'Aver seguito un programma di allenamento costante',
        'Conoscere i benefici dell\'attività fisica naturale',
        'Saper organizzare sessioni di hebertismo'
      ],
      brevettiCollegati: ['trappeur', 'animatore-sportivo']
    },
    {
      id: 'idraulico',
      nome: 'Idraulico',
      icona: '🚰',
      descrizione: 'Conosce impianti idraulici e sa effettuare riparazioni',
      requisiti: [
        'Conoscere il funzionamento degli impianti idraulici',
        'Saper effettuare riparazioni idrauliche base',
        'Conoscere i materiali e gli attrezzi del mestiere',
        'Conoscere le norme di sicurezza idraulica',
        'Aver eseguito diverse riparazioni documentate'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'infermiere',
      nome: 'Infermiere',
      icona: '⚕️',
      descrizione: 'Conosce il pronto soccorso e sa prestare le prime cure',
      requisiti: [
        'Conoscere le tecniche di pronto soccorso',
        'Saper gestire le emergenze più comuni',
        'Conoscere la composizione e l\'uso della cassetta di pronto soccorso',
        'Aver seguito un corso di primo soccorso certificato',
        'Saper riconoscere i sintomi delle principali patologie'
      ],
      brevettiCollegati: ['soccorritore']
    },
    {
      id: 'interprete',
      nome: 'Interprete',
      icona: '🗣️',
      descrizione: 'Conosce lingue straniere e sa comunicare',
      requisiti: [
        'Conoscere almeno due lingue straniere',
        'Saper tradurre testi scritti e orali',
        'Aver facilitato la comunicazione in contesti internazionali',
        'Conoscere le culture dei paesi delle lingue studiate',
        'Saper insegnare basi di lingua straniera ad altri'
      ],
      brevettiCollegati: ['cittadino-mondo']
    },
    {
      id: 'lavoratore-cuoio',
      nome: 'Lavoratore in cuoio',
      icona: '👢',
      descrizione: 'Sa lavorare il cuoio e realizzare oggetti',
      requisiti: [
        'Conoscere i tipi di cuoio e le tecniche di lavorazione',
        'Saper usare gli attrezzi per il cuoio',
        'Aver realizzato almeno cinque oggetti in cuoio',
        'Conoscere le tecniche di decorazione del cuoio',
        'Saper effettuare riparazioni su oggetti in cuoio'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'maestro-giochi',
      nome: 'Maestro dei giochi',
      icona: '🎲',
      descrizione: 'Conosce giochi e sa animare momenti ludici',
      requisiti: [
        'Conoscere almeno 30 giochi diversi',
        'Saper organizzare e animare giochi per diverse età',
        'Conoscere le regole e le varianti dei giochi',
        'Saper adattare i giochi alle diverse situazioni',
        'Aver animato diversi momenti ludici documentati'
      ],
      brevettiCollegati: ['animatore-sportivo']
    },
    {
      id: 'maestro-nodi',
      nome: 'Maestro dei nodi',
      icona: '🪢',
      descrizione: 'Conosce i nodi e le legature scout',
      requisiti: [
        'Conoscere almeno 20 nodi e le loro applicazioni',
        'Saper eseguire legature e costruzioni',
        'Saper insegnare i nodi ad altri',
        'Conoscere la storia e l\'uso tradizionale dei nodi',
        'Aver utilizzato i nodi in situazioni pratiche'
      ],
      brevettiCollegati: ['pioniere', 'esploratore-acque']
    },
    {
      id: 'meccanico',
      nome: 'Meccanico',
      icona: '⚙️',
      descrizione: 'Conosce la meccanica e sa effettuare riparazioni',
      requisiti: [
        'Conoscere il funzionamento dei meccanismi comuni',
        'Saper effettuare manutenzione e riparazioni meccaniche',
        'Conoscere gli attrezzi e il loro uso',
        'Saper leggere schemi meccanici',
        'Aver eseguito diverse riparazioni documentate'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'modellista',
      nome: 'Modellista',
      icona: '✈️',
      descrizione: 'Sa costruire modelli e plastici',
      requisiti: [
        'Conoscere le tecniche di modellismo',
        'Aver costruito almeno cinque modelli completi',
        'Saper usare diversi materiali per il modellismo',
        'Conoscere le tecniche di pittura e finitura',
        'Saper progettare e realizzare plastici'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'muratore',
      nome: 'Muratore',
      icona: '🧱',
      descrizione: 'Conosce le tecniche di costruzione in muratura',
      requisiti: [
        'Conoscere i materiali da costruzione',
        'Saper eseguire piccole opere in muratura',
        'Conoscere le norme di sicurezza in cantiere',
        'Saper preparare malte e impasti',
        'Aver realizzato costruzioni documentate'
      ],
      brevettiCollegati: ['mani-abili', 'pioniere']
    },
    {
      id: 'musicista',
      nome: 'Musicista',
      icona: '🎸',
      descrizione: 'Sa suonare uno strumento musicale',
      requisiti: [
        'Saper suonare almeno uno strumento',
        'Conoscere la teoria musicale di base',
        'Aver un repertorio di almeno 20 brani',
        'Saper suonare in gruppo',
        'Aver animato momenti comunitari con la musica'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'nuotatore',
      nome: 'Nuotatore',
      icona: '🏊',
      descrizione: 'Sa nuotare con diverse tecniche',
      requisiti: [
        'Saper nuotare con almeno tre stili diversi',
        'Conoscere le norme di sicurezza in acqua',
        'Saper effettuare un salvamento base',
        'Aver compiuto nuotate di resistenza',
        'Conoscere le tecniche di immersione'
      ],
      brevettiCollegati: ['esploratore-acque', 'soccorritore']
    },
    {
      id: 'osservatore',
      nome: 'Osservatore',
      icona: '👁️',
      descrizione: 'Sa osservare e descrivere ciò che lo circonda',
      requisiti: [
        'Conoscere le tecniche di osservazione',
        'Saper descrivere con precisione ciò che si osserva',
        'Aver condotto osservazioni naturalistiche documentate',
        'Conoscere i principali metodi scientifici di osservazione',
        'Saper dedurre informazioni dalle osservazioni'
      ],
      brevettiCollegati: ['naturalista', 'sherpa']
    },
    {
      id: 'osservatore-meteo',
      nome: 'Osservatore meteo',
      icona: '🌤️',
      descrizione: 'Conosce i fenomeni meteorologici e sa prevederli',
      requisiti: [
        'Conoscere i fenomeni meteorologici',
        'Saper leggere e interpretare le previsioni meteo',
        'Saper riconoscere i segni del tempo dalla natura',
        'Aver condotto osservazioni meteorologiche documentate',
        'Conoscere l\'uso degli strumenti meteorologici'
      ],
      brevettiCollegati: ['naturalista', 'sherpa']
    },
    {
      id: 'pescatore',
      nome: 'Pescatore',
      icona: '🎣',
      descrizione: 'Sa pescare con diverse tecniche',
      requisiti: [
        'Conoscere le tecniche di pesca sportiva',
        'Saper riconoscere i pesci del proprio territorio',
        'Conoscere le norme sulla pesca e la sostenibilità',
        'Saper preparare e mantenere l\'attrezzatura da pesca',
        'Aver praticato la pesca rispettando l\'ambiente'
      ],
      brevettiCollegati: ['naturalista', 'esploratore-acque']
    },
    {
      id: 'pompiere',
      nome: 'Pompiere',
      icona: '🚒',
      descrizione: 'Conosce le tecniche antincendio e di sicurezza',
      requisiti: [
        'Conoscere le cause e la prevenzione degli incendi',
        'Saper usare gli estintori e altri mezzi antincendio',
        'Conoscere le procedure di evacuazione',
        'Saper gestire piccole emergenze legate al fuoco',
        'Conoscere le norme di sicurezza antincendio'
      ],
      brevettiCollegati: ['soccorritore']
    },
    {
      id: 'redattore',
      nome: 'Redattore',
      icona: '📝',
      descrizione: 'Sa scrivere e curare pubblicazioni',
      requisiti: [
        'Conoscere le tecniche di redazione',
        'Saper scrivere diversi tipi di testo',
        'Aver curato la redazione di pubblicazioni',
        'Conoscere le regole editoriali',
        'Saper correggere e impaginare testi'
      ],
      brevettiCollegati: ['giornalista']
    },
    {
      id: 'regista',
      nome: 'Regista',
      icona: '🎬',
      descrizione: 'Sa dirigere spettacoli e produzioni audiovisive',
      requisiti: [
        'Conoscere le tecniche di regia teatrale e video',
        'Aver diretto almeno tre produzioni',
        'Saper coordinare un gruppo di lavoro artistico',
        'Conoscere le fasi di produzione di uno spettacolo',
        'Saper curare sceneggiatura e montaggio'
      ],
      brevettiCollegati: ['artista', 'grafico-multimediale']
    },
    {
      id: 'sarto',
      nome: 'Sarto',
      icona: '🧵',
      descrizione: 'Sa cucire e realizzare capi di abbigliamento',
      requisiti: [
        'Conoscere le tecniche di cucito a mano e macchina',
        'Saper prendere misure e tagliare tessuti',
        'Aver realizzato almeno cinque capi completi',
        'Conoscere i diversi tessuti e le loro proprietà',
        'Saper effettuare riparazioni su capi d\'abbigliamento'
      ],
      brevettiCollegati: ['mani-abili']
    },
    {
      id: 'scenografo',
      nome: 'Scenografo',
      icona: '🎪',
      descrizione: 'Sa progettare e realizzare scenografie',
      requisiti: [
        'Conoscere le tecniche scenografiche',
        'Aver realizzato scenografie per almeno tre spettacoli',
        'Saper progettare scene funzionali e d\'effetto',
        'Conoscere i materiali e le tecniche di costruzione scene',
        'Saper coordinare la realizzazione scenografica'
      ],
      brevettiCollegati: ['artista']
    },
    {
      id: 'segnalatore',
      nome: 'Segnalatore',
      icona: '🚩',
      descrizione: 'Conosce i sistemi di segnalazione scout',
      requisiti: [
        'Conoscere l\'alfabeto Morse e semaforico',
        'Saper trasmettere e ricevere messaggi',
        'Conoscere i segnali di pista',
        'Aver organizzato attività di segnalazione',
        'Saper costruire bandiere semaforiche'
      ],
      brevettiCollegati: ['maestro-tecnologie']
    },
    {
      id: 'servizio-parola',
      nome: 'Servizio della Parola',
      icona: '📖',
      descrizione: 'Sa proclamare la Parola nelle celebrazioni',
      requisiti: [
        'Conoscere i testi liturgici e il loro uso',
        'Saper proclamare le letture con voce chiara',
        'Aver prestato servizio nelle celebrazioni',
        'Conoscere il significato delle letture liturgiche',
        'Saper preparare letture e monizioni'
      ],
      brevettiCollegati: ['liturgista']
    },
    {
      id: 'servizio-liturgico',
      nome: 'Servizio liturgico',
      icona: '⛪',
      descrizione: 'Sa prestare servizio nelle celebrazioni liturgiche',
      requisiti: [
        'Conoscere lo svolgimento della liturgia',
        'Saper svolgere i vari ruoli liturgici',
        'Aver prestato servizio regolare alle celebrazioni',
        'Conoscere gli oggetti liturgici e il loro uso',
        'Saper preparare spazi per le celebrazioni'
      ],
      brevettiCollegati: ['liturgista']
    },
    {
      id: 'servizio-missionario',
      nome: 'Servizio missionario',
      icona: '🌍',
      descrizione: 'Conosce e sostiene le missioni nel mondo',
      requisiti: [
        'Conoscere la realtà delle missioni nel mondo',
        'Aver promosso iniziative di sostegno missionario',
        'Conoscere testimonianze di missionari',
        'Aver sensibilizzato altri sulla solidarietà',
        'Conoscere le culture dei paesi di missione'
      ],
      brevettiCollegati: ['liturgista', 'cittadino-mondo']
    },
    {
      id: 'topografo',
      nome: 'Topografo',
      icona: '🗺️',
      descrizione: 'Sa leggere carte e orientarsi sul territorio',
      requisiti: [
        'Saper leggere carte topografiche',
        'Conoscere l\'uso di bussola e GPS',
        'Saper tracciare percorsi su carta',
        'Conoscere i simboli topografici',
        'Aver condotto escursioni usando carte e bussola'
      ],
      brevettiCollegati: ['sherpa']
    },
    {
      id: 'velista',
      nome: 'Velista',
      icona: '⛵',
      descrizione: 'Sa condurre imbarcazioni a vela',
      requisiti: [
        'Conoscere le parti di una barca a vela',
        'Saper manovrare una barca a vela',
        'Conoscere le andature e le manovre veliche',
        'Conoscere le norme di sicurezza in navigazione',
        'Aver compiuto diverse uscite in barca a vela'
      ],
      brevettiCollegati: ['esploratore-acque']
    }
  ],
  
  brevetti: [
    {
      id: 'naturalista',
      nome: 'Naturalista',
      icona: '🦉',
      descrizione: 'Competenza nell\'osservazione e nello studio della natura',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito naturalistico',
        'Aver approfondito le conoscenze naturalistiche del proprio territorio',
        'Dimostrare capacità di condurre osservazioni scientifiche',
        'Aver partecipato a un momento di confronto sulla competenza naturalistica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['allevatore', 'alpinista', 'amico-animali', 'astronomo', 'boscaiolo', 'botanico', 'campeggiatore', 'coltivatore', 'geologo', 'giardiniere', 'osservatore', 'osservatore-meteo', 'pescatore']
    },
    {
      id: 'artista',
      nome: 'Artista',
      icona: '🎨',
      descrizione: 'Competenza nelle arti espressive e creative',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito artistico',
        'Aver realizzato progetti artistici significativi',
        'Dimostrare capacità di espressione creativa personale',
        'Aver partecipato a un momento di confronto sulla competenza artistica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['artigiano', 'artista-strada', 'attore', 'cantante', 'danzatore', 'disegnatore', 'folclorista', 'giocattolaio', 'grafico', 'musicista', 'regista', 'scenografo']
    },
    {
      id: 'giornalista',
      nome: 'Giornalista',
      icona: '📰',
      descrizione: 'Competenza nella comunicazione scritta e informazione',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito giornalistico',
        'Aver prodotto articoli o servizi giornalistici di qualità',
        'Dimostrare capacità di ricerca e verifica delle fonti',
        'Aver partecipato a un momento di confronto sulla competenza giornalistica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['archeologo', 'collezionista', 'corrispondente', 'fotografo', 'redattore']
    },
    {
      id: 'grafico-multimediale',
      nome: 'Grafico Multimediale',
      icona: '💻',
      descrizione: 'Competenza nella comunicazione visiva e digitale',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito grafico e multimediale',
        'Aver realizzato progetti grafici e multimediali complessi',
        'Dimostrare padronanza degli strumenti digitali',
        'Aver partecipato a un momento di confronto sulla competenza grafica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['disegnatore', 'esperto-computer', 'fotografo', 'grafico', 'regista']
    },
    {
      id: 'cittadino-mondo',
      nome: 'Cittadino del mondo',
      icona: '🌏',
      descrizione: 'Competenza nell\'apertura internazionale e interculturale',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito interculturale',
        'Aver partecipato a esperienze internazionali significative',
        'Dimostrare sensibilità interculturale e capacità di dialogo',
        'Aver partecipato a un momento di confronto sulla competenza di cittadinanza',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['amico-quartiere', 'europeista', 'folclorista', 'guida', 'interprete', 'servizio-missionario']
    },
    {
      id: 'liturgista',
      nome: 'Liturgista',
      icona: '✝️',
      descrizione: 'Competenza nella liturgia e nell\'animazione spirituale',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito liturgico',
        'Aver preparato e animato celebrazioni liturgiche',
        'Dimostrare conoscenza approfondita della liturgia',
        'Aver partecipato a un momento di confronto sulla competenza liturgica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['servizio-parola', 'servizio-liturgico', 'servizio-missionario', 'cantante', 'musicista']
    },
    {
      id: 'animatore-sportivo',
      nome: 'Animatore Sportivo',
      icona: '⚽',
      descrizione: 'Competenza nell\'attività sportiva e ludica',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito sportivo',
        'Aver organizzato e condotto attività sportive per gruppi',
        'Dimostrare conoscenza di diversi sport e giochi',
        'Aver partecipato a un momento di confronto sulla competenza sportiva',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['atleta', 'hebertista', 'maestro-giochi']
    },
    {
      id: 'guida-alpina',
      nome: 'Guida Alpina',
      icona: '🏔️',
      descrizione: 'Competenza nell\'escursionismo e alpinismo',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito alpinistico',
        'Aver condotto escursioni impegnative in montagna',
        'Dimostrare conoscenza approfondita dell\'ambiente montano',
        'Aver partecipato a un momento di confronto sulla competenza alpinistica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['alpinista', 'campeggiatore', 'geologo', 'osservatore-meteo', 'topografo']
    },
    {
      id: 'mani-abili',
      nome: 'Mani Abili',
      icona: '🛠️',
      descrizione: 'Competenza nelle attività manuali e artigianali',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito artigianale',
        'Aver realizzato progetti artigianali complessi',
        'Dimostrare padronanza di diverse tecniche manuali',
        'Aver partecipato a un momento di confronto sulla competenza artigianale',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['artigiano', 'carpentiere-navale', 'elettricista', 'falegname', 'fatutto', 'giocattolaio', 'idraulico', 'lavoratore-cuoio', 'meccanico', 'modellista', 'muratore', 'sarto']
    },
    {
      id: 'pioniere',
      nome: 'Pioniere',
      icona: '🏗️',
      descrizione: 'Competenza nelle costruzioni da campo e pionieristica',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito pionieristico',
        'Aver realizzato costruzioni pionieristiche significative',
        'Dimostrare capacità di progettazione e realizzazione',
        'Aver partecipato a un momento di confronto sulla competenza pionieristica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['boscaiolo', 'campeggiatore', 'falegname', 'maestro-nodi', 'muratore']
    },
    {
      id: 'soccorritore',
      nome: 'Soccorritore',
      icona: '🚑',
      descrizione: 'Competenza nel primo soccorso e nelle emergenze',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito del soccorso',
        'Aver seguito corsi certificati di primo soccorso',
        'Dimostrare capacità di gestione delle emergenze',
        'Aver partecipato a un momento di confronto sulla competenza di soccorso',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['infermiere', 'nuotatore', 'pompiere']
    },
    {
      id: 'sherpa',
      nome: 'Sherpa',
      icona: '🥾',
      descrizione: 'Competenza nell\'esplorazione e nell\'orientamento',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito esplorativo',
        'Aver condotto hike e esplorazioni significative',
        'Dimostrare eccellenti capacità di orientamento',
        'Aver partecipato a un momento di confronto sulla competenza esplorativa',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['campeggiatore', 'ciclista', 'guida', 'osservatore', 'osservatore-meteo', 'topografo']
    },
    {
      id: 'trappeur',
      nome: 'Trappeur',
      icona: '🏕️',
      descrizione: 'Competenza nella vita nei boschi e sopravvivenza',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito trappeur',
        'Aver vissuto esperienze significative di vita nei boschi',
        'Dimostrare capacità di autonomia in natura',
        'Aver partecipato a un momento di confronto sulla competenza trappeur',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['atleta', 'boscaiolo', 'campeggiatore', 'cuoco', 'hebertista']
    },
    {
      id: 'maestro-tecnologie',
      nome: 'Maestro delle Tecnologie',
      icona: '📡',
      descrizione: 'Competenza nelle tecnologie e comunicazioni digitali',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito tecnologico',
        'Aver realizzato progetti tecnologici complessi',
        'Dimostrare padronanza delle tecnologie moderne',
        'Aver partecipato a un momento di confronto sulla competenza tecnologica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['corrispondente-radio', 'elettricista', 'elettronico', 'esperto-computer', 'segnalatore']
    },
    {
      id: 'esploratore-acque',
      nome: 'Esploratore delle Acque',
      icona: '🚤',
      descrizione: 'Competenza nelle attività nautiche e acquatiche',
      requisiti: [
        'Conquistare almeno 3-4 specialità dell\'ambito nautico',
        'Aver condotto attività nautiche significative',
        'Dimostrare competenza nella navigazione e sicurezza in acqua',
        'Aver partecipato a un momento di confronto sulla competenza nautica',
        'Aver sperimentato l\'incarico di Maestro di specialità in Squadriglia o Reparto'
      ],
      specialitaCollegate: ['battelliere', 'canoista', 'carpentiere-navale', 'guida-marina', 'maestro-nodi', 'nuotatore', 'pescatore', 'velista']
    }
  ]
};
