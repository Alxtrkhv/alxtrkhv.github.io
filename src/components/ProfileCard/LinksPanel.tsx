import styles from "./LinksPanel.module.css";

import LinkButton from "./LinkButton";

type Props = {
  links: string[][];
};

export default function LinksPanel(props: Props) {
  return (
    <ul className={styles.links}>
      {props.links.map((item) => (
        <li>
          <LinkButton icon={item[0]} link={item[1]} />
        </li>
      ))}
    </ul>
  );
}
