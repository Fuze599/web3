import React, { useState } from "react";

const Context = React.createContext(null)
    
const ProviderWrapper = (props) => {
    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () => {
        const newValue = good + 1
        setGood(newValue)
        return newValue
    }

    const increaseOk = () => {
        const newValue = ok + 1
        setOk(newValue)
        return newValue
    }

    const increaseBad = () => {
        const newValue = bad + 1
        setBad(newValue)
        return newValue
    }

    const resetAll = () => {
        setBad(0)
        setOk(0)
        setGood(0)
    }

    const exposedValue = {
        good,
        increaseGood, 
        ok,
        increaseOk,
        bad,
        increaseBad,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
             { props.children }
           </Context.Provider>
}
    
export {    
    Context,
    ProviderWrapper,    
}