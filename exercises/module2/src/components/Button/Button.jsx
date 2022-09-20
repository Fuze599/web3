
const Button = ({ onClick, text, delta }) => {
    return <button onClick={() => onClick(delta)}>{text}</button>   
}

export default Button