import { useState } from "react";
import PlayGame from "./components/PlayGame/PlayGame";
import StartGame from "./components/StartGame/StartGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((perv) => !perv);
  };

  return (
    <>
      {gameStarted ? (
        <PlayGame />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
