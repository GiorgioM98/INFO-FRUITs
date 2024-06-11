## Panoramica

L'applicazione si concentra sulla divulgazione di una sana alimentazione!


### Dashboard

Il design della piattaforma è stato ideato con uno stile minimalista e moderno, la dashboard presenta colori pensati apposta per il tipo di applicazione e in sintonia con le immagini.


### Ricerca Frutti

Per semplificare la ricerca dei frutti, la pagina fornisce un input di ricerca.


 ### Dettagli frutti

Tramite i vari contenitori dei frutti, premendo sopra, oltre ad avere un effetto rotativo visivo, si aprirà una finestra, dove si portanno vedere le varie informazioni del frutto selezionato.
Nella prima tabella le info del frutto saranno: 
-La famiglia botanica a cui appartiene il frutto.
-L'ordine botanico a cui appartiene la famiglia.
-Il genere botanico del frutto.

Nella seconda tabella si potranno leggere i valori nutrizionali del frutto:
-Calories
-Fat
-Sugar
-Carbohydrates
-Protein


### Footer

Il footer è caratterizzato dalle info dello sviluppatore con il link che rimanda al suo profilo LinkedIn.


## Guida di Installazione

Per inizializzare il progetto sul proprio device, seguire i seguenti passaggi:

1. Clonare il repository sul proprio sistema locale.
2. Eseguire `npm install` per installare le dipendenze.
3. Configurare l'ambiente locale, se necessario.
4. Eseguire `ng serve --open` per avviare l'applicazione in modalità sviluppo e attendere l'apertura automatica del browser.

## IMPORTANTE

Nel nostro progetto, dobbiamo accedere a un'API esterna per ottenere dati sui frutti. Tuttavia, a causa delle restrizioni CORS impostate dal server dell'API, non è possibile fare richieste dirette dall'applicazione frontend al server dell'API. Questo causa errori di CORS e impedisce il corretto funzionamento del sito.
Per risolvere questo problema, abbiamo implementato un proxy sul nostro server. Un proxy funge da intermediario tra la nostra applicazione frontend e l'API esterna. Quando il frontend necessita di dati dall'API, invia una richiesta al proxy. Il proxy, a sua volta, fa la richiesta all'API esterna e poi restituisce i dati al frontend. Questo metodo aggira le restrizioni CORS perché il browser vede la richiesta come proveniente dal nostro stesso dominio.


## Struttura del Progetto

Il progetto è strutturato in modo seguente:

- `src/`: Contiene il codice sorgente dell'applicazione.
  - `app/`: Contiene i componenti, i servizi e i moduli dell'app.
  - `assets/`: Contiene risorse come immagini e file statici.
- `node_modules/`: Contiene le dipendenze del progetto.
- `angular.json`: File di configurazione per Angular CLI.
- `package.json`: File di configurazione per le dipendenze del progetto.


## Risoluzione dei Problemi Comuni

### Problema: L'applicazione non si avvia correttamente

- **Soluzione:** Assicurarsi di aver eseguito `npm install` per installare le dipendenze. Controllare la console per eventuali errori durante l'avvio.

## API Endpoints

L'applicazione si interfaccia con l'API di FRUITYVICE per fornire informazioni sui vari frutti. Di seguito sono elencati gli endpoints principali forniti dalla classe `HttpService`:

### Get list of all fruits

  - Metodo: `GET`
  - Endpoint: `api/fruit/all`
  - Descrizione: Lista di tutti i frutti.


### Fruit Details

  - Metodo: `GET`
  - Endpoint: `api/fruit/{name}`
  - Descrizione: Ottiene le informazioni di un frutto specifico.

Questo progetto è stato generato con la versione 17.3.0. ('https://v17.angular.io/docs')
