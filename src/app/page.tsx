"use client";

import userProfile from "../assets/config.json";

import Profile from "../layouts/Profile";

export default function Home() {
  return <Profile profile={userProfile} />;
}
