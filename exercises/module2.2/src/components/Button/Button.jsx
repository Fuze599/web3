const Button = ({clickHandler, text, delta}) => <button data-delta={delta} onClick={clickHandler}>{text}</button>
export default Button