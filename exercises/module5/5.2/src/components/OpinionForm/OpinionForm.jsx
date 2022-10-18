import { useState, useContext } from "react";
import { Context as OpinionContext } from 'contexts/OpinionContext';

const OpinionForm = () => {
  const { addOpinion } = useContext(OpinionContext)
  const [newOpinion, setNewOpinion] = useState("")

  const newOpinionHandle = (e) => {
    setNewOpinion(e.target.value)
  }

  const addNewOpinionHandle = (e) => {
    e.preventDefault()
    addOpinion(newOpinion)
  }

  return (
    <form onSubmit={addNewOpinionHandle}>
      <input type="text" onChange={newOpinionHandle}></input>
      <input type="submit"></input>
    </form>
  )
}

export default OpinionForm