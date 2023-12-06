import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Panel = ({title, text, votes}) => <><h2>{title}</h2><p>{text}</p><p>Has {votes ? votes : 0} votes.</p></>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState({0:0})
  const [mostVoted, setMostVoted] = useState(0)

  let next = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  let getMostVoted = () => {
    if (votes[mostVoted] < votes[selected]){
      setMostVoted(selected)
    }
  }

  let vote = () => {
    let newVotes = {...votes}
    newVotes[selected] ? newVotes[selected] += 1 : newVotes[selected] = 1
    addVote(newVotes)
    //setMostVoted(votes[getMostVoted()])
  }

  getMostVoted()

  return (
    <div>
    <Panel title="Some random anecdote" text={anecdotes[selected]} votes={votes[selected]}/>
    <Button onClick={vote} text="Vote" />
    <Button onClick={next} text="Next anecdote" />
    <Panel title="Ranking of anecdotes" text={anecdotes[mostVoted]} votes={votes[mostVoted]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
