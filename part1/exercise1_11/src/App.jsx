import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistic = ({ good, neutral, bad }) => {

  let allclicks = 0;
  let average = 0;
  let positive = 0;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }else {
      allclicks = good + neutral + bad;
      average = (good - bad) / allclicks;
      positive = (good * 100) / allclicks;
    }
    // Calculate statistics
    
    return (
      <div>
        <table>
          <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={allclicks} />
              <StatisticLine text="average" value={average} />
              <StatisticLine text="positive" value={`${positive} %`} />
          </tbody>
        </table>
      </div>
    );
}

function App() {

const [good, set_good] = useState(0);
const [neutral, set_neutral] = useState(0);
const [bad, set_bad] = useState(0);

 return (
    <div className='App'>
      <h1>GIVE Feedback</h1>
      <Button onClick={() => set_good(good + 1)} text="good" />
      <Button onClick={() => set_neutral(neutral + 1)} text="neutral" />
      <Button onClick={() => set_bad(bad + 1)} text="bad" />
      <h2>statistic</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;