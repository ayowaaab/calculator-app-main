import Button from "./button";
import styles from "./calculator.module.css";
const Calculator = () => {
  const keys = ["7", "8", "9", "6", "5", "4", "3", "2", "1", "/", "0", "."];
  const operators = ["+", "-", "*", "DEL"];
  const bottomKeys = ["=", "RESET"];
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.mainGrid}>
          {keys.map((key) => (
            <Button key={key} value={key} />
          ))}
        </div>
        <div className={styles.rightGrid}>
          {operators.map((operator) => (
            <Button key={operator} value={operator} />
          ))}
        </div>
        <div className={styles.bottomGrid}>
          {bottomKeys.map((key) => (
            <Button key={key} value={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
