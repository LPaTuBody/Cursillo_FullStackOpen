import { useState } from 'react'

const Buttons = (props) => ( 
  <button onClick={props.handleButton}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  // console.log('props en Statistics', props)
  const [gooD, neutraL, baD, totaL, proM] = props.contadores
  const everY = props.contadores.every( (val) => val === 0 )

  if (everY === true) {
    return(
      <p>No feedback given</p>
    )
  } else {
    const pstv = (gooD*100)/totaL
    const avg = proM/totaL
    return(
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={'Good'} value={gooD}/>
            <StatisticLine text={'Neutral'} value={neutraL} />
            <StatisticLine text={'Bad'} value={baD} />
            <StatisticLine text={'Total'} value={totaL} />
            <StatisticLine text={'Avarage'} value={avg} />
            <StatisticLine text={'Positive'} value={pstv+'%'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const 
  [good, setGood] = useState(0),
  [neutral, setNeutral] = useState(0),
  [bad, setBad] = useState(0),
  [total, setTotal] = useState(0),
  [prom, setProm] = useState(0)

  const FbGood = () => {
    const newGood = good + 1
    const updAvg = prom + 1
    setGood(newGood)
    setTotal(newGood + neutral + bad)
    setProm(updAvg)
  }

  const FbNeutral = () => {
    const newNeutral = neutral + 1
    const updAvg = prom + 0
    setNeutral(newNeutral)
    setTotal(good + newNeutral + bad)
    setProm(updAvg)
  }

  const FbBad = () => {
    const newBad = bad + 1
    const updAvg = prom - 1
    setBad(newBad)
    setTotal(good + neutral + newBad)
    setProm(updAvg)
  }

  // console.log('total general', total)
  // console.log('prom', prom)

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons handleButton={FbGood} text={'Good'}/>
      <Buttons handleButton={FbNeutral} text={'Neutral'}/>
      <Buttons handleButton={FbBad} text={'Bad'}/>
      <Statistics contadores={[good, neutral, bad, total, prom]} />
    </div>
  )
}

export default App