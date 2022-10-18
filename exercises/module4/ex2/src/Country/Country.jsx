const Country = ({country}) => {
    const languages = []
    for(const language in country.languages) languages.push(language)
    return (
        <>
            <p>Capitale : {country.capital[0]}</p>
            <p>Area : {country.area}</p>
            <p>Languages</p>
            <ul>
                {languages.map(l => <li key={l}>{l}</li>)}
            </ul>
            <img alt='flag' src={country.flags.png}></img>
        </>
    )
}

export default Country