// src/components/ProfilePage.js
import React from 'react';
import './profilepage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src="your-profile-image.jpg" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>John Doe</h2>
        <p>Front-End Developer</p>
        <p>Web enthusiast and JavaScript lover. Passionate about creating user-friendly web experiences.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
