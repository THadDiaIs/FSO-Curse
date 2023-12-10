import React from "react"
import Content from './Content.jsx'
import Header from './Header.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      {course.parts.map( part => <Content key={part.id} name={part.name} exercises={part.exercises}/>)}
      <Total course={course} />
    </div>
  )
}

export default Course
