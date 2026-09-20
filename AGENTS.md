Jeg har en eksisterende portfolio-hjemmeside bygget i Wix:

https://lineamoltved.wixsite.com/portfolio

Jeg vil rekonstruere hjemmesiden som en moderne React-applikation.

Vigtigt: Jeg ønsker ikke et nyt design. Den eksisterende Wix-side skal bruges som visuel reference, og forsiden skal så vidt muligt genskabes visuelt med samme layout, spacing, typografi, farver, navigation og generelle udtryk.

Jeg vil dog udvide forsiden med en sektion til mine projekter.

Projekterne skal bygges via et genbrugeligt React-komponent, så jeg senere selv kan oprette forskellige projekter uden at skulle ændre selve layout-komponenterne.

Lav de forskellige sektioner på siden som hver sit component i hver sin fil, så der er et overblik i koden

Teknologi
React
Tailwind CSS
Data kommer til at være i JSON og billeder i en puplic mappe


Start med at analysere Wix-siden og lav en plan for:

komponentstruktur i react



Arkitektur
portfolio/
│
├── app/
├── components/
├── data/
│   └── projects.json
├── public/
│   └── img/
│   └── projects/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── package.json