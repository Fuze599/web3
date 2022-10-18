const Persons = ({persons, onClick}) => {
    return (
        <table>
        <tbody>
            {persons.map(p => {
                return (
                    <tr key={p.id}>
                        <td key={p.id}>{p.name} {p.number}</td>
                        <td ><button value={p.id} onClick={onClick}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
    )
}

export default Persons