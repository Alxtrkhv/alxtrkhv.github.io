import styles from './ProfileCard.module.css';

import UserProfile from '../data/UserProfile';

interface Props {
    userProfile: UserProfile;
}

export default function ProfileCard(props: Props) {
    return (
        <div className={styles.card}>
            <img src={props.userProfile.avatarPath} alt=''></img>
            <h1 className={styles.name}>{props.userProfile.firstName} {props.userProfile.lastName}</h1>
            <h2 className={styles.title}>{props.userProfile.title}</h2>
        </div>
    );
}
