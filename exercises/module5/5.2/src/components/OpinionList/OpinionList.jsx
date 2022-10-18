import { Context as OpinionContext } from 'contexts/OpinionContext';
import { useContext } from 'react'

const OpinionList = () => {
  const { sortedOpinions, addVote } = useContext(OpinionContext)

  return (
    <table>
      <tbody>
        {sortedOpinions().map(o => {
          return (
            <tr key={o.uuid}>
              <td>{o.opinion}</td>
              <td>{o.vote}</td>
              <td>
                <button onClick={() => addVote(o.uuid)}>Vote</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default OpinionList