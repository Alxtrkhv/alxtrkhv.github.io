import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <p className={styles.logo}>Alexander Terekhov</p>
        </div>
    );
}
