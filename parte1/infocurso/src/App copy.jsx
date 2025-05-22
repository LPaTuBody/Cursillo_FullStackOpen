/* const App = () => {
  const 
    course = "Half Stack application development",
    part1 = "Fundamentos de React",
    excercises1 = 10,
    part2 = "Usando props para pasar datos",
    excercises2 = 7,
    part3 = "Estado de un componente",
    excercises3 = 14

    return (
      <div>
        <h1>{course}</h1>

        <p>{part1} {excercises1}</p>
        <p>{part2} {excercises2}</p>
        <p>{part3} {excercises3}</p>

        <p>Número de ejercicios: {excercises1 + excercises2 + excercises3}</p>
      </div>
    )
} */

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.curso}</h1>
    </>
  )
}

const Parts = (props) => {
  console.log(props)
  return (
    <p>{props.parte} {props.ejercicio}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Parts parte={props.partes[0]} ejercicio={props.ejercicios[0]} />
      <Parts parte={props.partes[1]} ejercicio={props.ejercicios[1]} />
      <Parts parte={props.partes[2]} ejercicio={props.ejercicios[2]} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Número total de ejercicios: {props.total}</p>
    </>
  )
}

const App = () => {
  const 
    course = "Half Stack application development",
    part1 = "Fundamentos de React",
    excercises1 = 10,
    part2 = "Usando Props Para Pasar Datos",
    excercises2 = 7,
    part3 = "Estado de un Componente",
    excercises3 = 14

  return (
    <div>
      <Header curso={course}/>
      <Content partes={[part1, part2, part3]} ejercicios={[excercises1, excercises2, excercises3]} />
      <Total total={excercises1 + excercises2 + excercises3}/>
    </div>
  )
}

export default App