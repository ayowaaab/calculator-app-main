import styles from "./theme-switch.module.css";
const ThemeSwitch = () => {
  return (
    <div className={styles.slider}>
      <p>THEME</p>
      <label className={styles.switch}>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <span></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
