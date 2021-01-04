import React, { useEffect, useState } from 'react';

const Profile = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const url =
      'https://jsonplaceholder.typicode.com/users/?id=' + props.match.params.id;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUser(res[0]));
  });
  
  return (
    
    <div class="container">
    <div class="avatar-flip">
      <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
      <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
    </div>
    
    <h2>  {user && user.name }</h2>
    <h4>{user && user.email}</h4>
    
    </div>
  );
};

export default Profile;

