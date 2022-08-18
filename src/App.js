import logo from './logo.svg';
import './App.css';
import CreateTest from './components/CreateTest';
import TakeTest from './components/TakeTest';

function App() {
  return (
    <div className="App">
      <h1>Jigs Test</h1>
      {/* <p>Requirements: 1. Jigs test creator 2. Jig conduct test</p> */}
      {/* <CreateTest/> */}
      <TakeTest/>
    </div>
  );
}

export default App;
