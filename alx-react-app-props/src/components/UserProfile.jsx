import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}


export default UserProfile;