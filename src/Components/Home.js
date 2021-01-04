import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UserCard from './UserCard';

const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    const fetchData=()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))
    }
    fetchData()
   },[])

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;
