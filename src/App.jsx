import styles from './App.module.css';
import Display from "./components/Display"
import ButtonsContainer from './components/ButtonsContainer';


function App() {
  return (
    <div className={styles.main}>
    <div className={styles.calculator}>
      <Display/>
      <ButtonsContainer/>
</div>
    </div>
  );
  
}

export default App;
