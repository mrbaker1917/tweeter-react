import React from 'react';
import './Profile.css';

export const Profile = () => {

  return (
    <aside>
      <div className="profile">
        <img className="profile_img" src="/images/profile-hex.png" alt="profile_avatar" />
      </div>
      <div className="profile_name">
        <h2>Amy Mansell</h2>
      </div>
    </aside>
  )
}