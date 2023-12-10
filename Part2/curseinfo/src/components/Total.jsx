import React from 'react'

const Total = ({course}) => {
    return <p>Total of:  <strong>{course.parts.reduce((tot,prt) => tot + prt.exercises,0)}</strong> exercises.</p>
}

export default Total
