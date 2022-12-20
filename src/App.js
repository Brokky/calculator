import './App.css';
import { useState } from 'react';
import Buttons from './containers/Buttons/Buttons';
import Display from './containers/Display/Display';

function App() {

  // Light/Dark modes

  const lightColors = ['#A9DCFD', '#D8EEFF', '#FFF',
    'linear-gradient(244.38deg, #9EE8FF 8.14%, #5ACEFF 27.9%, #79AFFF 56.94%, #2D5FDE 84.11%)',
    'rgba(230, 246, 255, 0.2)', 'rgba(255, 255, 255, 0.3)', '#373737', 'rgba(55, 55, 55, 0.5)', '#6396C5'];
  const darkColors = ['#1B6A9C', '#003661', '#000',
    'linear-gradient(244.38deg, #42869B 8.14%, #2A7DA1 27.9%, #224E91 56.94%, #00123F 84.11%)', 'rgba(5, 5, 5, 0.3)',
    'rgba(5, 5, 5, 0.2)', '#FBFBFB', 'rgba(251, 251, 251, 0.5)', '#3D76AB'];
  const variablesColors = ['--color-toggle-bg', '--color-toggle-selected', '--color-display', '--color-buttons-container',
    '--color-buttons-bg', '--color-buttons-bg-opaque', '--color-text', '--color-history', '--color-rectangle'];

  const [toggle, setToggle] = useState(true);

  function changeTheme() {
    setToggle(!toggle);

    variablesColors.forEach((val, ind) => {
      document.documentElement.style.setProperty(val, toggle ? darkColors[ind] : lightColors[ind]);
    })
  }

  // Numbers for calculation

  const [numbers, setNumbers] = useState([]);

  // Waiting for next number

  const [waiting, setWaiting] = useState(false);

  // Operators for calculation

  const [operators, setOperators] = useState([]);

  function changeOperators(value) {
    if (waiting) operators.pop();
    if (!waiting) {
      setWaiting(!waiting);
      setNumbers([...numbers, Number(calc)]);
    }
    setOperators([...operators, value]);
  }

  // Displayed numbers

  const [calc, setCalc] = useState('');

  function changeCalc(value) {

    let newValue = calc + value;

    if (calc === '' && (value === '0' || value === '00')) newValue = calc;
    if ((calc.includes('.') || calc === '') && value === '.') newValue = calc;
    if (waiting) {
      newValue = value;
      setWaiting(!waiting);
    }

    setCalc(newValue);
  }

  // Get result

  const [result, setResult] = useState('');

  function changeResult() {
    setNumbers([...numbers, Number(calc)]);
    
    setResult(numbers.reduce((acc, cur, ind) => {
      switch (operators[ind - 1]) {
        case '+':
          return acc + cur;
        case '-':
          return acc - cur;
        case '*':
          return acc * cur;
        case '/':
          return acc / cur;
        default:
          console.log('changeResult() ERROR');
      }
    }));
    console.log(numbers);
  }


  function showResult() {
    console.log(result);
  }

  function showNumbers() {
    console.log(numbers);
  }

  function showOperators() {
    console.log(operators);
  }

  function showCalc() {
    console.log(calc);
  }


  return (
    <div className="App">
      <Display theme={toggle} changeTheme={changeTheme} calc={result ? result : calc} />
      <Buttons changeCalc={changeCalc} changeOperators={changeOperators} changeResult={changeResult} />
      <button onClick={showResult}>Result</button>
      <button onClick={showNumbers}>Numbers</button>
      <button onClick={showOperators}>Operators</button>
      <button onClick={showCalc}>Calc</button>
    </div>
  );
}

export default App;
