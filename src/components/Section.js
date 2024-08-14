import styles from "../styles/section.module.css";
import SubscribeButton from "../components/SubscribeButton";
import InputButton from "../components/InputButton";

export default function Section() {
  return (
    <section className={styles.section}>
      <p className={styles.sub}>Subscribe</p>
      <p className={styles.sign}>
        Sign up with your email address to receive news and updates.
      </p>
      <div className={styles.container}>
        <InputButton placeholder="First Name" />
        <InputButton placeholder="Last Name" />
        <InputButton placeholder="Email" />
      </div>
      <SubscribeButton />
    </section>
  );
}
