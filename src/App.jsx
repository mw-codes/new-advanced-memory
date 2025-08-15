import { useState, useEffect } from "react";

const App = () => {
  // Test-Daten
  const memoryCards = [
    { id: 1, image: "1" },
    { id: 2, image: "2" },
    { id: 3, image: "3" },
    { id: 4, image: "1" },
    { id: 5, image: "2" },
    { id: 6, image: "3" },
  ];

  // useState INNERHALB der Komponente definieren
  const [cards, setCards] = useState([]);
  //Funktion Karten mischen
  const shuffleCards = () => {
    const shuffled = memoryCards.sort(() => Math.random() - 0.5);
    setCards([...shuffled]); // Neues Array erstellen
    console.log("Karten wurden gemischt!");
  };

  // Test: Karten setzen
  useEffect(() => {
    setCards(memoryCards);
    console.log("6 Karten wurden gesetzt!");
  }, []);

  // Debug-Info anzeigen
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold underline mb-4">React + TailwindCSS</h1>
      <p className="text-3xl font-bold m-4">Anzahl Karten: {cards.length}</p>
      {/* Grid Layout für 6 Karten jetzt responsiv durch standard/mobile-view grid-cols-1 medium/größer-view md:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-blue-500 text-white p-8 rounded text-center text-4xl font-bold"
          >
            {card.image}
            <div className="text-sm mt-2">ID: {card.id}</div>
          </div>
        ))}
      </div>
      {/* Button Karten mischen */}
      <div className="text-center mb-6">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={shuffleCards}
        >
          🔄 Karten mischen
        </button>
      </div>
      {/* DEBUG: Cards-Array als formatiertes JSON anzeigen */}
      <pre className="text-blue-300">{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
};

export default App;
