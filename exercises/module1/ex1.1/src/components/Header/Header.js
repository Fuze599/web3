import imageRigolote from "./little_pony.jpg"

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
        <img src={imageRigolote} alt="rigolote"></img>
      </>
    )
  }
export default Header