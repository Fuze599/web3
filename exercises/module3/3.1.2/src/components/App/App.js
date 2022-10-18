import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (<tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>)
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <table>
      <tbody>
          <StatisticLine text="Good" value={good}></StatisticLine>
          <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          <StatisticLine text="Bad" value={bad}></StatisticLine>

          <StatisticLine text="All" value={good + neutral + bad}></StatisticLine>
          <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)}></StatisticLine>
          <StatisticLine text="Positive" value={(good) / (good + neutral + bad) * 100}></StatisticLine>
      </tbody>
    </table>
  )
}

const Loading = ({message}) => {
  return <p>{message}</p>
}

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const [loading, setLoading] = useState(0);

  setTimeout(() => setLoading(!loading), 3000)

  if (loading) {
    return <Loading message="Chargement"></Loading>
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

      <h2>Anecdotes</h2>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Changer anecdote</button>
      <button onClick={() => {
        const newVote = [...vote]
        newVote[selected] = newVote[selected] + 1
        setVote(newVote)
      }}>Voter pour l'anecdote ({vote[selected]})</button>
      <div>
        {anecdotes[selected]}
      </div>

      <h2>Best Anecdotes</h2>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
    </div>
  )
}

export default App