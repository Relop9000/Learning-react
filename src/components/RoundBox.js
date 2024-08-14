import styles from "../styles/Round.module.css";

export default function Button(props) {
  const { text } = props;
  return <div className={styles.round}>{text}</div>;
}
