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
  //let part = props.parts.map(elem => );
  return (
    props.parts.map(elem => <p>{elem.name} {elem.excercises}</p>)
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of excercises {props.parts.reduce((acc, obj) => acc+obj.excercises,0)}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name : 'Fundamentals of React',
    excercises: 10
  },
  {
    name:'Using props to pass data',
    excercises: 7
  },
  {
    name: 'State of a component',
    excercises: 14
  }]

  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
