import styles from "./Profile.module.css";

import UserProfile from "../data/UserProfile";
import GeneralLayout from "../layouts/General";
import ProfileCard from "../components/ProfileCard";

type Props = {
  profile: UserProfile;
};

export default function Profile(props: Props) {
  return (
    <GeneralLayout
      author={`${props.profile.firstName} ${props.profile.lastName}`}
      firstYear={props.profile.firstYear}
    >
      <div className={styles.home}>
        <ProfileCard userProfile={props.profile} />
      </div>
    </GeneralLayout>
  );
}
