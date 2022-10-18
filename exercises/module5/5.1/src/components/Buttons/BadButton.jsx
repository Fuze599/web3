import { useContext } from "react";
import { Context as CountersContext } from 'contexts/countersContext'

const BadButton = () => {
    const { increaseBad } = useContext(CountersContext)
    return <button onClick={() => increaseBad()}>Increase bad</button>
}

export default BadButton