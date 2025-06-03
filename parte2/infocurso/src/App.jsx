import Course from './components/Course'

const App = () => {
  const course = [
    {
      id: 1,
      name: "Half Stack Application Development",
      parts: [
        {
          name: "Fundamentos de React",
          excercises: 10,
          id: 1
        },
        {
          name: "Usando Props Para Pasar Datos",
          excercises: 7,
          id: 2
        },
        {
          name: "Estado de un Componente",
          excercises: 14,
          id: 3
        },
        {
          name: "Redux",
          excercises: 11,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          name: "Routing",
          excercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          excercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      <h1>Web Development Curriculum</h1>
      <Course curso={course}/>
    </div>
  )
}

export default App