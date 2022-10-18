import { useContext } from "react";
import { Context as CountersContext } from 'contexts/countersContext'

const OkButton = () => {
    const { increaseOk } = useContext(CountersContext)
    return <button onClick={() => increaseOk()}>Increase ok</button>
}

export default OkButton