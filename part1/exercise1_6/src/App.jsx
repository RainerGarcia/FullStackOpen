import { useState } from 'react'

const App = () => {
  // State to keep track of the number of clicks for good, neutral, and bad feedback

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className='App'>
      <h1>GIVE Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistic</h2>

      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </div>
  );
};
export default App;