import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(resp => resp.data)
    /* const nonExisting = {
        id: 56,
        name: "Añaña Contreras",
        number: "(809) 333-4444"
    }
    return request.then(response => response.data.concat(nonExisting)) */
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(resp => resp.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(resp => resp.data)
}

const dilit = (id) => ( axios.delete(`${baseUrl}/${id}`) )

export default { getAll, create, dilit, update }