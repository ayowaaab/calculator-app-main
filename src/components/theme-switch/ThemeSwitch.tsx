import styles from "./theme-switch.module.css";
const ThemeSwitch = () => {
  return (
    <div>
      <label className={styles.index}>
        <label className={styles.label}>
          1
          <input className={styles.input} type="checkbox" />
        </label>
        <label className={styles.label}>
          2
          <input className={styles.input} type="checkbox" />
        </label>
        <label className={styles.label}>
          3
          <input className={styles.input} type="checkbox" />
        </label>
      </label>
      <div className={styles.switch}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
