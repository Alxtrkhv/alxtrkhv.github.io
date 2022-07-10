import styles from './ProfileCard.module.css';

import LinksPanel from './LinksPanel';

import UserProfile from '../../data/UserProfile';

type Props = {
    userProfile: UserProfile;
}

export default function ProfileCard(props: Props) {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={props.userProfile.avatar} alt='' />
            <h1 className={styles.name}>{props.userProfile.firstName} {props.userProfile.lastName}</h1>
            <h2 className={styles.title}>{props.userProfile.title}</h2>
            <LinksPanel links={props.userProfile.profiles} />
        </div>
    );
}
