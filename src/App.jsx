import { useState, useEffect } from "react";
// Test-Daten
const memoryCards = [
  { id: 1, image: "1" },
  { id: 2, image: "2" },
  { id: 3, image: "3" },
  { id: 4, image: "1" },
  { id: 5, image: "2" },
  { id: 6, image: "3" },
];
const App = () => {
  // useState INNERHALB der Komponente definieren
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]); // Leeres Array am Start

  const handleCardClick = (cardId) => {
    // Prüfen: Ist diese Karte bereits geklickt?
    if (clickedCards.includes(cardId)) {
      console.log(`Karte ${cardId} ist bereits geklickt!`);
      return; // Stopp! Karte ist schon aufgedeckt
    }

    // Limit: Maximal 2 Karten gleichzeitig
    if (clickedCards.length >= 2) {
      console.log("Limit erreicht! Maximal 2 Karten gleichzeitig.");
      return; // Stopp! Keine weitere Karte hinzufügen
    }

    console.log(`Karte mit ID ${cardId} wurde geklickt!`);

    // Karte zu geklickten Karten hinzufügen
    setClickedCards([...clickedCards, cardId]);
    console.log("Geklickte Karten:", [...clickedCards, cardId]);
  };

  //Funktion Karten mischen
  const shuffleCards = () => {
    const shuffled = memoryCards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        position: index + 1, // Position 1-6 im Grid
      }));
    setCards(shuffled);
    // Karten schließen
    setClickedCards([]);
    console.log("Karten wurden gemischt und alle Karten geschlossen!");
  };

  // Test: Karten setzen
  useEffect(() => {
    const cardsWithPosition = memoryCards.map((card, index) => ({
      ...card,
      position: index + 1, // Position 1-6 im Grid
    }));
    setCards(cardsWithPosition);
    console.log("6 Karten wurden gesetzt!");
  }, []);

  // Debug-Info anzeigen
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold underline mb-4">React + TailwindCSS</h1>
      <p className="text-3xl font-bold m-4">Anzahl Karten: {cards.length}</p>
      {/* Grid Layout für 6 Karten jetzt responsiv durch standard/mobile-view grid-cols-1 medium/größer-view md:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cards.map((card) => {
          // Prüfen ob Karte geklickt wurde
          const isClicked = clickedCards.includes(card.id);

          return (
            <div
              key={card.id}
              className={`
                ${
                  isClicked
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }
                text-white p-6 rounded-lg text-center font-bold 
                transition-colors duration-200 shadow-lg cursor-pointer
              `}
              onClick={() => handleCardClick(card.id)}
            >
              {/* Position-Nummer (klein, oben) */}
              <div className="text-xs opacity-70 mb-2">
                Position: {card.position}
              </div>

              {/* Hauptbild (groß) */}
              <div className="text-4xl mb-3">
                {isClicked ? card.image : "?"}
              </div>

              {/* 🔍 Debug-Info (klein, unten) */}
              <div className="text-sm opacity-80">ID: {card.id}</div>
            </div>
          );
        })}
      </div>
      {/* Button Karten mischen */}
      <div className="text-center mb-6 space-x-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={shuffleCards}
        >
          Karten mischen
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setClickedCards([])}
        >
          Klicks zurücksetzen
        </button>
      </div>
      {/* DEBUG: Cards-Array als formatiertes JSON anzeigen */}
      <pre className="text-blue-300">{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
};

export default App;
