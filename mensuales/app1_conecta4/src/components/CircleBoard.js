export default function CircleBoard(props) {
    return (
        <button className={`circle-board token-${props.value} mx-auto`} onClick={props.onClick}></button>
    )
}