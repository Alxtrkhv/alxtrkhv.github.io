export default class UserProfile {
  firstName: string;
  lastName: string;
  title: string;
  avatarPath: string;
  profiles: Array<[string, string]>;

  constructor(
    firstName: string,
    lastName: string,
    title: string,
    avatarPath: string,
    profiles: Array<[string, string]>
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.avatarPath = avatarPath;
    this.profiles = profiles;
  }
}
