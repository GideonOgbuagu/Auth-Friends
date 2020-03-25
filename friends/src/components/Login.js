import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {
    console.log(props)
const [account, setAccount] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setAccount({
        ...account,
        [e.target.name]: e.target.value

    })
}


const login = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/login", account)
        .then(res => {
            //res.data
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            props.history.push('/friends');
            setAccount({
                username: '',
                password: ''
            })
        })
        .catch(err => console.log(err.message))
}

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={account.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;
