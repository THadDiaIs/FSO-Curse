import { useState } from 'react'
import './App.css'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLabel = ({label, total, symbol}) => <tr><td>{label}</td><td>{total} {symbol}</td></tr>

const Statistics = ({labels, totals}) => {
  let percent = 0;
  let sum = totals.reduce((acc,elem) => acc+elem, 0);
  if (Number(totals.join('')) > 0){
    percent = (totals[0] * 100) / sum;
    return (
      <table>
      <tbody>
      <StatisticLabel label={labels[0]} total={totals[0]} symbol=""/>
      <StatisticLabel label={labels[1]} total={totals[1]} symbol=""/>
      <StatisticLabel label={labels[2]} total={totals[2]} symbol=""/>

      <StatisticLabel label="All" total={sum} symbol=""/>
      <StatisticLabel label="Average" total={(sum)/totals.length} symbol=""/>
      <StatisticLabel label="Positive" total={percent} symbol="%"/>
      </tbody>
      </table>
    )
  }
  return <h3> No feedback given</h3>

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  let voteForGood = () => setGood(good + 1)
  let voteForNeutral = () => setNeutral(neutral + 1)
  let voteForBad = () => setBad(bad + 1)
  let labels = ['Good','Neutral','Bad']

  return (
    <div>
    <h1> give feedback </h1>
    <Button onClick={voteForGood} text={labels[0]}/>
    <Button onClick={voteForNeutral} text={labels[1]}/>
    <Button onClick={voteForBad} text={labels[2]}/>
    <h1> statistics </h1>
    <Statistics labels={labels} totals={[good, neutral, bad]}/>
    </div>
  )
}

export default App
