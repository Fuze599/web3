import Country from 'Country/Country';

const Countries = ({countries, onButtonClick}) => {
  if (countries.length === 1) return <Country country={countries[0]}></Country>
  return (
    <table>
      <tbody>
        {countries.map(c => {
          return (
            <>
              <tr key={c.name.common}>
                <td key={c.name.common}>{c.name.common}</td>
              </tr>
              <tr key={'button-' + c.name.common}>
                <td key={'button-' + c.name.common}>
                  <button value={c.name.common} onClick={onButtonClick}>Show</button>
                </td>
              </tr>
            </>
          )
        })}
      </tbody>
    </table>
  )
}

export default Countries