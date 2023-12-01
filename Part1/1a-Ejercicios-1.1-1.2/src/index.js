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
    props.parts.map(elem => <p>{elem.name} {elem.exercises}</p>)
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of excercises {props.parts.reduce((acc, obj) => acc+obj.exercises,0)}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
