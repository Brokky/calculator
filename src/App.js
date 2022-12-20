import './App.css';
import { useState } from 'react';
import Buttons from './containers/Buttons/Buttons';
import Display from './containers/Display/Display';

function App() {

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

  return (
    <div className="App">
      <Display theme={toggle} changeTheme={changeTheme} />
      <Buttons />
    </div>
  );
}

export default App;
