import { Context as OpinionContext } from 'contexts/OpinionContext';
import { useContext } from 'react'

const OpinionList = () => {
  const { sortedOpinions, addVote } = useContext(OpinionContext)

  return (
    <>
      {sortedOpinions().map(o => {
        return (
          <tr>
            <td key={o.uuid}>{o.opinion}</td>
            <td>{o.vote}</td>
            <td><button onClick={() => addVote(o.uuid)}>Vote</button></td>
          </tr>
        )
      })}
    </>
  );
}

export default OpinionList