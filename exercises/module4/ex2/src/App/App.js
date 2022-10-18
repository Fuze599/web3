import { useState, useEffect } from 'react'
import axios from 'axios';
import Countries from 'Countries/Countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtredCountries, setFiltredCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
        setFiltredCountries(response.data)
      })
  }, [])

  const handlerCountriesChange = (e) => {
    setFiltredCountries(countries.filter(c => c.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const onButtonClick = (e) => {
    e.preventDefault()
    setFiltredCountries(countries.filter(c => c.name.common === e.target.value))
  }

  return (
    <form>
      find countries <input onChange={handlerCountriesChange} />
      <Countries countries={filtredCountries} onButtonClick={onButtonClick} ></Countries>
    </form>
  );
}

export default App;
