import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)
const ProviderWrapper = (props) => {

  const [opinions, setOpinions] = useState([
    { uuid: uuidv4(), opinion: "Opinion A", vote: 3 }
  ])

  const sortedOpinions = () => {
    return opinions.sort((o1, o2) => o1.vote > o2.vote)
  }

  const addVote = (uuid) => {
    const opinion = opinions.find(o => o.uuid === uuid)
    if (opinion) setOpinions(opinions.filter(o => o.uuid !== uuid).concat({ ...opinion, vote: opinion.vote + 1 }))
  }

  const addOpinion = (opinionStr) => {
    setOpinions(opinions.concat({ uuid: uuidv4(), opinion: opinionStr, vote: 1 }))
  }

  const exposedValue = {
    addOpinion,
    sortedOpinions,
    addVote
  }

  return <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
}

export {
  Context,
  ProviderWrapper,
}