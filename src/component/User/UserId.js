import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Friends from '../Friends/Friends';

const UserId = () => {
    const {UserId} = useParams();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${UserId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <p>Welcome user :{UserId}</p>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website:{user.website}</p>
        </div>
    );
};

export default UserId;