import styles from "./input.module.css";
interface Props {
  value: number;
}

const Input = () => {
  return (
    <>
      <input className={styles.input} placeholder="0" defaultValue={399.981} />
    </>
  );
};

export default Input;
