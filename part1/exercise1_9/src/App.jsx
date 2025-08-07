import { useState } from 'react'

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
        <p>all {allclicks}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
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
      <button onClick={() => set_good(good + 1)}>good</button>
      <button onClick={() => set_neutral(neutral + 1)}>neutral</button>
      <button onClick={() => set_bad(bad + 1)}>bad</button>
      <h2>statistic</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;