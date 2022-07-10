import styles from "./Footer.module.css";

type Props = {
  author: string;
  firstYear: number;
};

function GetYearsText(firstYear: number): string {
  const currentYear = new Date().getFullYear();

  return firstYear < currentYear
    ? `${firstYear} - ${currentYear}`
    : currentYear.toString();
}

export default function Footer(props: Props) {
  return (
    <div className={styles.footer}>
      <b>
        {"\u00A9"} {GetYearsText(props.firstYear)} {props.author}
      </b>
    </div>
  );
}
