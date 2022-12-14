import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createOne = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    console.log(request);
    return request.then(response => response.data)
}

const deleteOne = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const updateOne = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(response => response.data)
}

const service = { getAll, createOne, deleteOne, updateOne }
export default service