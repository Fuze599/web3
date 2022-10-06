import Button from 'components/Button/Button'
import Display from 'components/Display/Display'
import useLocalStorage from 'hooks/useLocalStorage'

const App = () => {
  const [ counter, setCounter ] = useLocalStorage("counter", 0)

  function clickHandler(e) {
    const nbr = parseInt(e.target.dataset.delta)
    localStorage.setItem("counter", JSON.stringify(counter + nbr))
    setCounter(counter + nbr)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button delta={1} clickHandler={clickHandler} text='plus'/>      
      <Button delta={-counter} clickHandler={clickHandler} text='zero'/>           
      <Button delta={-1} clickHandler={clickHandler} text='minus'/>               
    </div>
  )
}

export default App