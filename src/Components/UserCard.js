import React from 'react';
import { Link } from 'react-router-dom';


const UserCard = ({ user }) => {
  return (
    <div class="container">
    <div class="avatar-flip">
      <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
      <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
    </div>
    <Link to={`/profile/${user.id}`} className="profile_l" >
    <h2> {user.name}</h2></Link>
    <h4>{user.email}</h4>
     
    <p> {user.company.name}</p>
    <p>{user.company.catchPhrase}</p>
  </div>
  );
};

export default UserCard;



