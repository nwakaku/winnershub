import React from 'react';
import { getUser } from '../../features/user/user';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(getUser)
    return (
        <div className='profile_page'>
            <h1> Profile Page</h1>
            <p> DisplayName: {user.displayName}</p>
            <p> Email: {user.email}</p>
            <p> Password: {user.password}</p>
        </div>
    )
}

export default Profile
