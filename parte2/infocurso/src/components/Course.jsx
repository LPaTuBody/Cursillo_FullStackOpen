const Header = ({curso}) => ( <h2>{curso}</h2> )

const Content = ({ partes }) => {
  // console.log("Content", partes)
  return(
    partes.map(parte => 
      <p key={parte.id}>
      {parte.name} {parte.excercises}
      </p>
    )
  )
}

const Total = ({ partes }) => {
  // console.log("Total", partes)
  const suma = partes.reduce((s, e) => { return s + e.excercises }, 0)
  return(
    <p>Número total de ejercicios: {suma}</p>
  )
}

const Course = ({curso}) => {
  // console.log("Course", curso)
  return(
    curso.map(c =>
      <div key={c.id}>
        <Header curso={c.name} />
        <Content partes={c.parts} />
        <Total partes={c.parts} />
      </div>
    ) 
  )
}

export default Course