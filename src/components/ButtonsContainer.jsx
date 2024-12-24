import styles from './ButtonsContainer.module.css';

function ButtonsConatainer() {
  const buttonNames = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => {
          return <button className={styles.button}>{buttonName}</button>
      })}
    </div>
  );
}
export default ButtonsConatainer;
