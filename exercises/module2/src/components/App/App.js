import Button from "components/Button/Button"
import Display from "components/Display/Display"
import useLocalStorage from "hooks/useLocalStorage"


const App = () => {
  const [ counter, setCounter ] = useLocalStorage("counter", 0)

  const changeCount = (delta) => {
    localStorage.setItem("counter", JSON.stringify(counter + parseInt(delta)))
    setCounter(counter + parseInt(delta))
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={changeCount} delta={1} text='plus'/>      
      <Button onClick={changeCount} delta={-counter} text='zero'/>           
      <Button onClick={changeCount} delta={-1} text='minus'/>               
    </div>
  )
}

export default App;
