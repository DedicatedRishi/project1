import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <Wrapper>
            <div className='container my-5'>
                <h2>User Login</h2>
                <form>
                    <div class="mb-3 col-auto">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control w-50" name='name' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control w-50" name='name' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width: 50%;
margin: auto;
padding: 20px;
background-color: #2222;
background: url('/pratik/images/Reg-Background.jpg') no-repeat center center fixed;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
export default Login;