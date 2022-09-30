import Button from "components/Button/Button"
import Display from "components/Display/Display"
import useLocalStorage from "hooks/useLocalStorage"


const App = () => {
  const [ counter, setCounter ] = useLocalStorage("counter", 0)

  // const changeCount = (delta) => {
  //   localStorage.setItem("counter", JSON.stringify(counter + parseInt(delta)))
  //   setCounter(counter + parseInt(delta))
  // }

  function handleClick(e) {
    console.log("oui");
    const delta = e.target.dataset.delta
    console.log(e.target.attributes);
    localStorage.setItem("counter", JSON.stringify(counter + parseInt(delta)))
    setCounter(counter + parseInt(delta))
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={handleClick} data-delta="1" text='plus'/>      
      <Button onClick={handleClick} data-delta={-counter} text='zero'/>           
      <Button onClick={handleClick} data-delta="-1" text='minus'/>               
    </div>
  )
}

export default App;
