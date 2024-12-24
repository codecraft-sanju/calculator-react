import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'C') {
      setCalVal(''); // Clears the screen
    } else if (buttonValue === '=') {
      try {
        setCalVal(eval(calVal).toString()); // Evaluates the expression
      } catch (error) {
        setCalVal('Error'); // If invalid expression
      }
    } else {
      setCalVal(calVal + buttonValue); // Appends the button value to the current input
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
