import styles from "../styles/Square.module.css";

export default function Square(props) {
  const { text } = props;
  return <div className={styles.square}>{text}</div>;
}
