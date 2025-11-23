import Square from "./Square";
import "./Board.css";
function Board(props) {
    function renderSquare(index) {
        const isWinning =props.winningLine && props.winningLine.includes(index);
        return(
            <Square
            key={index}
            value={props.squares[index]}
            onClick= { () => props.onSquareClick(index)}
            isWinning={isWinning}
            />
        )
    }
    return(
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}
export default Board;