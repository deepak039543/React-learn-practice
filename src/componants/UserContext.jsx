import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        mobile: '',
        password: ''
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
