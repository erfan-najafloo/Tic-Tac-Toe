function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">
                <input type="text" placeholder="Player-1" />
              </span>
              <span className="player-symbol">X</span>
              <button>edit</button>
            </span>
          </li>
          <li>
            <span className="player">
              <span className="player-name">
                <input type="text" placeholder="Player-2" />
              </span>
              <span className="player-symbol">O</span>
              <button>edit</button>
            </span>
          </li>
        </ol>
        Game Board
      </div>
      log
    </main>
  );
}

export default App;
