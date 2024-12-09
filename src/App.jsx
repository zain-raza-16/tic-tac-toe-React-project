import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name='Hello' symbol='X' ></Player>
        <Player name='HGONE' symbol='O' ></Player>
        </ol>
        GAMEBOARD
      </div>
    </main>
  );
}

export default App;
