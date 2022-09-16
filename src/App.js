import './App.css';
import Counter from './components/Counter';
import LoginUseReducer from './components/LoginUseReducer';
import LoginUseState from './components/LoginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Examples</h1>
        {/* <Counter></Counter> */}
        {/* <LoginUseState></LoginUseState> */}
        <LoginUseReducer></LoginUseReducer>
      </header>
    </div>
  );
}

export default App;
