export default function Button(props) {
    return (
        <button className={props.className} value={props.value} onClick={props.onClick} type={props.type}>{props.labelName}</button>
    )
}