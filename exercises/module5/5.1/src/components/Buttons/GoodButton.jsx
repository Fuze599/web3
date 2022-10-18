import { useContext } from "react";
import { Context as CountersContext } from 'contexts/countersContext'

const GoodButton = () => {
    const { increaseGood } = useContext(CountersContext)
    return <button onClick={() => increaseGood()}>Increase good</button>
}

export default GoodButton