import './App.css';
import { useState, useEffect } from 'react';
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

  // State for history 

  const [history, setHistory] = useState('');

  // State for waiting

  const [waiting, setWaiting] = useState(false);

  // State for displayedNumber

  const [displayedNumber, setDisplayedNumber] = useState('');

  function changeDisplayedNumber(value) {

    let prev = displayedNumber;

    if (value === '.') {
      prev = prev.indexOf('.') === -1 ? prev + value : prev;
      setDisplayedNumber(prev);
      return;
    }

    if (operators[0] === '=') {
      setNumbers([]);
      setOperators([]);
    }

    if (waiting) {
      prev = '';
      setWaiting(!waiting);
      setDisplayedNumber(prev);
    }

    prev = prev === '-0' && value == 0 ? '-0' : Number(prev + value).toString();

    setDisplayedNumber(prev);

  }

  // State for pushed operators

  const [operators, setOperators] = useState([]);

  function addOperator(value) {

    if (operators.length < 1 && value === '=') return;

    if (waiting) {

      operators.pop();

    } else {

      setNumbers([...numbers, Number(displayedNumber)]);
      setWaiting(!waiting);

    }

    setOperators([...operators, value]);

  }

  // State for pushed numbers

  const [numbers, setNumbers] = useState([]);

  useEffect(() => {

    if (operators.length !== 2) {
      console.log(operators, operators.length);
      return;
    }

    let result = numbers.reduce((acc, cur, ind) => {
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
          console.error('Error');
      }
    })

    setHistory(numbers[0] + ' ' + operators[0] + ' ' + numbers[1] + ' = ' + result + '\n');
    setDisplayedNumber(result);
    setNumbers([result]);

    operators.shift();

    console.log(operators, 'operators have been changed');
    console.log(numbers, 'numbers has been changed');

  }, [operators]);

  // Function for percentage

  function makePercentage() {

    let x = operators[operators.length - 1] || '*';

    switch (x) {
      case '*':
      case '/':
        setDisplayedNumber(displayedNumber / 100);
        break;
      case '+':
      case '-':
        setDisplayedNumber(numbers[0] / 100 * displayedNumber);
        break;
      default:
        console.error('Error');
    }
  }

  // Function for negative and positive

  function changeNumberSign() {

    let changingResult = numbers.length === 1;

    let number = String(displayedNumber) || '0';

    if (!changingResult && waiting) {
      setNumbers([Number(number)]);
      number = '0';
      setDisplayedNumber(number);
      setWaiting(!waiting);
    }

    number = number.indexOf('-') === -1 ? '-' + number : number.slice(1);

    setDisplayedNumber(number);
  }

  // Function for clearing

  function allClear() {
    setWaiting(false);
    setDisplayedNumber('');
    setNumbers([]);
    setOperators([]);
    setHistory('');
  }


  return (
    <div className="App">
      <Display theme={toggle} changeTheme={changeTheme} displayedNumber={displayedNumber} history={history} />
      <Buttons changeDisplayedNumber={changeDisplayedNumber} addOperator={addOperator} makePercentage={makePercentage}
        changeNumberSign={changeNumberSign} allClear={allClear} />
    </div>
  );
}

export default App;
