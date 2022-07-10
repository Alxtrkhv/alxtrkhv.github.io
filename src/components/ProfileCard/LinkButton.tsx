import styles from "./LinkButton.module.css";

type Props = {
  icon: string;
  link: string;
};

export default function LinkButton(props: Props) {
  return (
    <div className={styles.link}>
      <a href={props.icon} target="_blank" rel="noreferrer">
        <img src={props.link} alt="" />
      </a>
    </div>
  );
}
