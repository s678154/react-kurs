# Daily, React Dashboard Applikasjon

Dette prosjektet er et praktisk kurs der du vil lære å bygge en interaktiv dashboard-applikasjon ved hjelp av React og Material-UI. Den inneholder komponenter som ToDoList, Vær-widget, Daglig Sitat, og en Kalender-widget.

## Kom i Gang

For å kjøre dette prosjektet lokalt, trenger du Node.js og npm installert på datamaskinen din.

### Installasjon


1. Stjerne og fork dette prosjektet til din GitHub-konto.
2. Klone prosjektet til din lokale maskin. 
3. Åpne en terminal i prosjektets rotkatalog. 
4. Kjør `npm install` for å installere avhengigheter. 
5. Kjør `npm start` for å starte utviklingsserveren.

## Struktur

- `src/components` - Inneholder React-komponentene.

## Bruk

Appen er inndelt i separate widgets som kan brukes og utvides uavhengig av hverandre. Du kan legge til nye funksjoner, forbedre eksisterende komponenter, eller bruke dem som inspirasjon for dine egne prosjekter.

## API-er
- Yr.no: `https://api.met.no/weatherapi/locationforecast/2.0/documentation`
  - Nowcast: `https://api.met.no/weatherapi/nowcast/2.0/complete?lat=${lat}&lon=${lon}`
- Quotes: `https://github.com/lukePeavey/quotable`
  - Random `https://api.quotable.io/random`
  
## Tilpasninger

- **Vær-widget**: Endre byer ved å oppdatere API-endepunktene.
- **ToDoList**: Utvid funksjonaliteten ved å legge til kategorier eller frister.
- **Daglig Sitat**: Implementer en funksjon for å dele sitater på sosiale medier.
- **Kalender-widget**: Integrer med Google Calendar eller andre tjenester for å synkronisere hendelser.

## Eksempel på hva man kan bygge nettsiden videre til
  https://rykkjetech-daily.vercel.app/
---

Lykke til, og håper du synes dette kurset både er lærerikt og underholdende!
