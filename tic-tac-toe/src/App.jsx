import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                line: [a, b, c],
            };
        }
    }
    return null;
}

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winnerInfo = calculateWinner(squares);
    const winner = winnerInfo?.winner ?? null;
    const winningLine = winnerInfo?.line ?? null;
    const isDraw = !winner && squares.every((sq) => sq !== null);

    const handleSquareClick = (index) => {
        if (winner || squares[index]) return;

        const nextSquares = [...squares];
        nextSquares[index] = xIsNext ? "X" : "O";

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    let statusText;
    if (winner) {
        statusText = `Winner: ${winner}`;
    } else if (isDraw) {
        statusText = "Draw!";
    } else {
        statusText = `Next Player: ${xIsNext ? "X" : "O"}`;
    }

    const statusClassName =
        `game-status ` +
        (winner ? "game-status-winner " : "") +
        (isDraw ? "game-status-draw" : "");

    return (
        <main className="app">
            <div className="game-card">
                <header className="game-header">
                    <h1 className="game-title">TicTacToe</h1>
                    <p className="game-subtitle">A clean, modern React implementation</p>
                </header>

                <section className="game-main">
                    <Board
                        squares={squares}
                        onSquareClick={handleSquareClick}
                        winningLine={winningLine}
                    />

                    <aside className="game-panel">
                        <p className={statusClassName}>{statusText}</p>

                        <button
                            type="button"
                            className="game-reset"
                            onClick={handleReset}
                        >
                            Restart Game
                        </button>

                        <div className="game-meta">
                            <span className="badge">
                                {xIsNext ? "X's turn" : "O's turn"}
                            </span>

                            <span className="hint">
                                Tip: try to create forks 😲
                            </span>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}

export default App;
