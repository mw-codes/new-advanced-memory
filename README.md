🎮 New Advanced Memory
Ein interaktives Memory-Spiel entwickelt mit React, das die modernen Web-Technologien demonstriert.

📋 Projektübersicht
Dieses Projekt ist ein advanced Memory-Spiel, das als Lernprojekt für moderne Frontend-Entwicklung dient. Es zeigt den Umgang mit React Hooks, State Management und modernen CSS-Frameworks.

🎯 Lernziele

React Hooks verstehen und anwenden (useState, useEffect)
State Management in React beherrschen
TailwindCSS und DaisyUI für modernes Styling
Vite als Build-Tool kennenlernen
React Router für Navigation (geplant)
Saubere, wartbare Code-Architektur entwickeln

🚀 Technologien

React 19 - Frontend Framework
Vite - Build Tool & Dev Server
TailwindCSS - Utility-First CSS Framework
DaisyUI - Component Library für Tailwind
React Router - Client-side Routing (geplant)

🔄 Entwicklungsphasen

✅ Phase 1: Basic Setup

Vite + React Projekt setup
TailwindCSS konfiguration
DaisyUI integration
Grundlegende Projektstruktur

🚧 Phase 2: Core Memory Logic

Memory-Spiellogik in App.jsx
3 Kartenpaare (6 Karten total)
State Management für Spielzustand
Flip-Animation und Paar-Erkennung

📋 Phase 3: Komponenten-Architektur

App.jsx in Komponenten aufteilen
MemoryCard Komponente
GameBoard Komponente
ScoreBoard Komponente
GameControls Komponente

🎨 Phase 4: Features & Styling

Slide/Scroll Funktionalität
Responsive Design
Animationen und Transitions
Verschiedene Schwierigkeitsstufen

🛣️ Phase 5: Routing & Navigation

React Router implementieren
Startseite, Spiel-Seite, Einstellungen
Navigation zwischen Seiten

🧠 Wichtige Lernkonzepte

React Hooks
javascript// State für Spiellogik
const [cards, setCards] = useState([]);
const [flippedCards, setFlippedCards] = useState([]);

// Seiteneffekte handhaben
useEffect(() => {
// Spiel initialisieren
}, []);
JavaScript Array-Methoden
javascript// Karten mischen
const shuffled = cards.sort(() => Math.random() - 0.5);

// Karten transformieren
const newCards = cards.map(card => ({ ...card, isFlipped: true }));

// Karten finden
const foundCard = cards.find(card => card.id === targetId);
📚 Hilfreiche Ressourcen

- [React Hooks Dokumentation](https://react.dev/reference/react)
- [TailwindCSS Dokumentation](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [Vite Guide](https://vitejs.dev/guide/)

🤝 Beitragen
Dieses Projekt dient dem Lernen. Feedback und Verbesserungsvorschläge sind willkommen!

📄 Lizenz
Lernprojekt - keine kommerzielle Nutzung

Entwickelt mit ❤️ als Lernprojekt für moderne React-Entwicklung
