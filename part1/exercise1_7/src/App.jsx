import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const allclicks = () => {
    return good + neutral + bad;
  };
  const averageclick = () =>{
    if (allclicks()==0) {
      return 0;
    }else{
      return (good - bad)/allclicks();
    }
  }
  
  const positiveclick = () =>{
    
     if (allclicks()==0) {
      return 0;
    }else{
      return (good*100)/allclicks();
    }
    
  }
  

 return (
    <div className='App'>
      <h1>GIVE Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistic</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allclicks()}</p>
      <p>average {averageclick()}</p>
      <p>positive {positiveclick()}%</p>
    </div>
  );
}

export default App