import React, { useState } from 'react';
import ReactDOM from 'react-dom';
/*
 * const Hello = ({name, age}) => {
 *  const bornYear = () => new Date().getFullYear() - age
 *  return (
 *    <div>
 *    <p>Hello {name}. You are {age} years old</p>
 *    <p>So you were probabily born in {bornYear()}</p>
 *    </div>
 *  )
 * }
 *
 * const Footer = () => {
 *  return (
 *    <div>
 *    greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
 *    </div>
 *  )
 * }
 *
 * const Display = ({counter}) => <div>{counter}</div>
 *
 * const Button = ({handleClick, text}) => (
 *    <button onClick={handleClick}>
 *    {text}
 *    </button>
 *  )
 *
 * const App = () => {
 *  const [counter, setCounter] = useState(0)
 *
 *  const increaseByOne = () => setCounter( counter + 1)
 *  const decreaseByOne = () => setCounter( counter - 1)
 *  const setToZero = () => setCounter(0)
 *
 *  return (
 *    <div>
 *      <Display counter={counter}/>
 *      <Button handleClick={increaseByOne} text="plus"/>
 *      <Button handleClick={setToZero} text="zero"/>
 *      <Button handleClick={decreaseByOne} text="minus"/>
 *    </div>
 *
 *  )
 * }*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
      the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
    button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
  {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
    {left}
    <Button onClick={handleLeftClick} text='left' />
    <Button onClick={handleRightClick} text='right' />
    {right}
    <History allClicks={allClicks} />    </div>
  )
}

ReactDOM.render(<App />,
                document.getElementById('root'))
