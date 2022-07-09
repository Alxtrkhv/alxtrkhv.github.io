import styles from './Home.module.css';

import UserProfile from '../data/UserProfile';
import GeneralLayout from '../layouts/General';
import ProfileCard from '../components/ProfileCard';

let profile: UserProfile = new UserProfile(
    'Alexander',
    'Terekhov',
    'Software Developer',
    'https://www.gravatar.com/avatar/83506d8360b704afd93ad11e97d2804c?s=350',
    []
);

export default function Home() {
    return (
        <GeneralLayout>
            <div className={styles.home}>
                <ProfileCard userProfile={profile}/>
            </div>
        </GeneralLayout>
    );
}
