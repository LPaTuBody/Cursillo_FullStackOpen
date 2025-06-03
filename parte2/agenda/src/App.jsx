import { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const 
  [persons, setPersons] = useState([]),
  [newFilter, setFilter] = useState(persons),
  [message, setMessage] = useState(null),
  [bColor, setbColor] = useState(true),
  [barra, setBarra] = useState('100%')

  useEffect(() => {
    personService
      .getAll()
      .then(personas =>{
        console.log('Promesa resuelta')
        setPersons(personas)
        setFilter(personas)
      })
      .catch(err => {
        console.log("Errorcito: ", err)
      })
  }, [])

  const handleAddNum = (e) => {
    e.preventDefault()
    const nombre = e.target[0].value.trim()
    const numero = e.target[1].value.trim()
    if (persons.some(val => nombre === val.name)) {
      if(confirm(`${nombre} is already added to phonebook. \nReplace the old number with the new one?`)){
        const gente = persons.find(p => p.name === nombre)
        const updPerson = {...gente, number: numero}
        // console.log("Gente en el server", gente)
        // console.log("Gente a actualizar", updPerson)
        personService.update(gente.id, updPerson).then(updGente => {
          setPersons(persons.map( p => p.id !== gente.id ? p : updGente ))
          setFilter(newFilter.map( f => f.id !== gente.id ? f : updGente ))

          setMessage(`${gente.name}'s number updated ${gente.number} => ${updGente.number}`)
          setbColor(true)
          setBarra('0')
          setTimeout(() => {
            setBarra('100%')
            setMessage(null)
          }, 4000)
        })
      }
    } else if(nombre === "" && numero === "") {
      e.target[0].focus()
      console.log("Campos vacíos, no enviar")
    } else {
      const newP = { name: nombre, number: numero }
      personService.create(newP).then(personita =>{
        // console.log("personita", personita)
        setPersons(persons.concat(personita))
        setFilter(persons.concat(personita))

        setMessage(`Added ${personita.name}`)
        setbColor(true)
        setBarra('0')
        setTimeout(() => {
          setBarra('100%')
          setMessage(null)
        }, 4000)
      })
    }
  }
  // console.log("persons", persons)
  
  const handleFilter = (e) => {
    const filtro = e.target.value.toLowerCase().trim()
    const filt = persons.filter(val => (val.name).toLowerCase().indexOf(filtro) != -1)
    setFilter(filt)
  }
  // console.log("filter", newFilter)

  const handleDelNum = (id) => {
    // console.log("Eliminando", id)
    const gente = persons.find(p => p.id === id)
    if(confirm(`Delete ${gente.name}?`)){
      personService
      .dilit(id).then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setFilter(newFilter.filter(p => p.id !== id))
        }
      )
      .catch(err => {
        setMessage(`${gente.name} was already deleted from server`)
        setbColor(false)
        setBarra('0')
        setTimeout(() => {
          setBarra('100%')
          setMessage(null)
        }, 4000)
        setPersons(persons.filter(p => p.id !== id))
        setFilter(newFilter.filter(p => p.id !== id))
        console.log("Errorcito: ", err)
      })
    }
  }

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <Notification message={message} prct={barra} color={bColor} />
      <Filter handleFilter={handleFilter} />
      <PersonForm addNum={handleAddNum} />
      <Persons filtro={newFilter} delNum={handleDelNum} />
    </div>
  )
}

export default App