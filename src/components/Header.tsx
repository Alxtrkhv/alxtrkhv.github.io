import styles from "./Header.module.css";

type Props = {
  title: string;
};

export default function Header(props: Props) {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>{props.title.toUpperCase()}</p>
    </div>
  );
}
