import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.curse}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} {props.excercises}</p>
    </>
  )
}
const Total = (props) => {
  return (
    <>
      <p>Number of excercises {porps.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} excercises={excercises1} />
      <Content part={part2} excercises={excercises2} />
      <Content part={part3} excercises={excercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
