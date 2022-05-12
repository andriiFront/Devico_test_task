import './App.css';
import animals from './animals.json'

function App() {
  const { pigs, chickens, cows } = animals;
  const totalNumberLegs = (pigs + cows) * 4 + chickens * 2;
  
  return (
    <div className="App">
      <h1>Test task</h1>
      <h2>The number of animals</h2>
      <div className='App-animals'>
        <p>pigs</p>
        <p>{pigs}</p>
      </div>
      <div className='App-animals'>
        <p>chickens</p>
        <p>{chickens}</p>
      </div>
      <div className='App-animals'>
        <p>cows</p>
        <p>{cows}</p>
      </div>
      <h2>Total number of animal legs:</h2>
      <p className='App-number-legs'>
        <b>{totalNumberLegs}</b>
      </p>
    </div>
  );
}

export default App;
