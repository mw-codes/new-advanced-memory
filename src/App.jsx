import { useState, useEffect } from "react";

const App = () => {
  // ← Hooks gehören INNERHALB der Komponente!
  const [cards, setCards] = useState([]);

  console.log("Cards:", cards); // Zum Testen

  return <h1 className="text-3xl font-bold underline">React + TailwindCSS</h1>;
};

export default App;
