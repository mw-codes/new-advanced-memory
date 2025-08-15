import { useState, useEffect } from "react";

const App = () => {
  // Test-Daten
  const memoryCards = [
    { id: 1, image: "1" },
    { id: 2, image: "2" },
    { id: 3, image: "3" },
  ];

  // useState INNERHALB der Komponente definieren
  const [cards, setCards] = useState([]);

  // Test: Karten setzen
  useEffect(() => {
    setCards(memoryCards);
    console.log("Karten wurden gesetzt!");
  }, []);

  // Debug-Info anzeigen
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold underline mb-4">React + TailwindCSS</h1>
      <p className="text-3xl font-bold m-4">Anzahl Karten: {cards.length}</p>
      {/* DEBUG: Cards-Array als formatiertes JSON anzeigen */}
      <pre className="text-blue-300">{JSON.stringify(cards, null, 2)}</pre>
    </div>
  );
};

export default App;
