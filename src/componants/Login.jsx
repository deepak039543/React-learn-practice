import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from './UserContext.jsx'
const Login = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    //setUser context
    const { setUser } = useContext(UserContext);


    const handleName = (e) => {
        setName(e.target.value);
    }


    const handleMobile = (e) => {
        setMobile(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSave = (e) => {
        e.preventDefault();
        setUser({ name, mobile, password });
        setName("");
        setMobile("");
        setPassword("");
        console.log(name);
        console.log(mobile);
        console.log(password);
    }
    return (
        <>
            <div>
                <h1 className='text-4xl text-center text-purple-600 font-bold'>login form</h1>
                <div className='text-center '>
                    <input className='bg-gray-400 m-2 rounded '
                        type="text"
                        value={name}
                        onChange={handleName}
                        placeholder='enter the name'
                    />
                    <input className='bg-gray-400 m-2 rounded '
                        type="number"
                        value={mobile}
                        onChange={handleMobile}
                        placeholder='enter the mobile number' />
                    <input className='bg-gray-400 m-2 rounded '
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        placeholder='enter strong password' />
                    <button onClick={handleSave} className='bg-purple-600 px-4 rounded'>save</button>
                </div>

            </div>

        </>
    )
}

export default Login