import './App.css';
import Calculator from './components/Calculator/Calculator';
import Timer from './components/Timer/Timer';
import useTimer from './customHooks/useTimer';

function App() {
  const date = useTimer();

  return (
    <div>
      <Timer time={date} />
      <Calculator />
    </div>
  );
}

export default App;