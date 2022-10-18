import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  /// ...
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={bad+good+neutral} />
      <StatisticLine text="average" value ={(good / (bad+good+neutral) * 100).toString() + "%"} />
      <StatisticLine text="positive" value ={(good / (bad+good+neutral) * 100).toString() + "%"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App