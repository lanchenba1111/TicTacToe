import "./Square.css";

function Square(props) {
    const className = props.isWinning ? "square square--winning" : "square" ;

    return(
        <button className={className} onClick={props.onClick}>
{props.value}
        </button>
    )
}
export default Square;