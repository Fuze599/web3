import { useContext } from "react";
import { Context as CountersContext } from 'contexts/countersContext'

const ResetButton = () => {
    const { resetAll } = useContext(CountersContext)
    return <button onClick={() => resetAll()}>Reset</button>
}

export default ResetButton