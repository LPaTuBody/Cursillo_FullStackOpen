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
      <Parts parte={props.partes[0].name} ejercicio={props.partes[0].excercises} />
      <Parts parte={props.partes[1].name} ejercicio={props.partes[1].excercises} />
      <Parts parte={props.partes[2].name} ejercicio={props.partes[2].excercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  const suma = props.partes[0].excercises + props.partes[1].excercises + props.partes[2].excercises
  return (
    <>
      <p>Número total de ejercicios: {suma}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentos de React",
        excercises: 10
      },
      {
        name: "Usando Props Para Pasar Datos",
        excercises: 7
      },
      {
        name: "Estado de un Componente",
        excercises: 14
      }
    ]
  }

  return (
    <div>
      <Header curso={course.name} />
      <Content partes={course.parts} />
      <Total partes={course.parts} />
    </div>
  )
}

export default App