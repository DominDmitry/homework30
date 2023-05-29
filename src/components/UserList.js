import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="box">
            <h1 className="boxTitle">List of Users</h1>
            <ul className="boxList boxListUsers">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
};

const UserItem = ({ user }) => {
    return (
        <div>
            <li className="boxItem boxItemUsers">{user.name}</li>
        <li className="boxItem boxItemUsers">
            <Link to={`/users/${user.id}`}>{'Album'}</Link>;
        </li>
        </div>
    );
};

export default UserList;