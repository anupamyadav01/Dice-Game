import { useState } from "react";
import PlayGame from "./components/PlayGame/PlayGame";
import StartGame from "./components/StartGame/StartGame";
import RoleDice from "./components/PlayGame/RoleDice";

function App() {
  const [gameStarted, setGameStarted] = useState(true);

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
      <RoleDice />
    </>
  );
}

export default App;
