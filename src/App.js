import './App.css';
import CreateWord from './components/CreateWord/CreateWord';
import ShowWord from './components/ShowWord/ShowWord';

function App() {
  return (
    <div className="App">
      <h1>Word Power</h1>
      <div><CreateWord/></div>
      <div><ShowWord/></div>
    </div>
  );
}

export default App;
