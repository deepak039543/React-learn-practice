import React, { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1 className='text-4xl text-center text-purple-600 font-bold'>Profile</h1>
            <div className='text-center'>
                <p className='text-xl'>Name: {user.name}</p>
                <p className='text-xl'>Mobile: {user.mobile}</p>
                <p className='text-xl'>Password: {user.password}</p>
            </div>
        </div>
    );
}

export default Profile;
