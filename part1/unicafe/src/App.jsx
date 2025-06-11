import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => setGood(good + 1);
  const handleNeutralFeedback = () => setNeutral(neutral + 1);
  const handleBadFeedback = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleFeedback={handleGoodFeedback} text='Good' />
      <Button handleFeedback={handleNeutralFeedback} text='Neutral' />
      <Button handleFeedback={handleBadFeedback} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ handleFeedback, text }) => {
  return (
    <button onClick={handleFeedback}>
      {text}
    </button>
  )
}

const Statistics = ({ good, neutral, bad }) => {  
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>
  }
  else {
    return (
      <table>
        <tbody>
          <StadisticLine text='Good' value={good} />
          <StadisticLine text='Neutral' value={neutral} />
          <StadisticLine text='Bad' value={bad} />
          <StadisticLine text='Total Feedback' value={good + neutral + bad} />
          <StadisticLine text='Average Score' value={(good - bad) / (good + neutral + bad || 1)} />
          <StadisticLine text='Positive Feedback Percentage' value={(good / (good + neutral + bad) * 100 || 0).toFixed(2) + '%'} />
        </tbody>
      </table>
    )
  }
}

const StadisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App