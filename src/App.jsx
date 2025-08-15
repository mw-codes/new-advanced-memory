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
      <div className="grid grid-cols-3 gap-4 mb-6">
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
      {/* DEBUG: Cards-Array als formatiertes JSON anzeigen */}
      <pre className="text-blue-300">{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
};

export default App;
