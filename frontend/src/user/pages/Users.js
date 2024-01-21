import React from 'react';

import UserList from '../componnets/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            places: 3
        }
    ];

    return (
        <UserList items={USERS} />
    );
}

export default Users;