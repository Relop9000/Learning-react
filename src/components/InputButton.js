import styles from "../styles/Button.module.css";

export default function InputButton(props) {
  const { placeholder } = props;
  return <input className={styles.input} placeholder={placeholder} />;
}
