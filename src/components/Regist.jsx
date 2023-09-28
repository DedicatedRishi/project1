import React from 'react'
import styled from 'styled-components'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Regist = () => {
 const[formData,setFormData]=useState({
    userId: '', // Initialize with an empty string, or you can generate it dynamically
    role: '',
    type: '',
    teamLeaderName: '',
    members: '',
    name: '',
    email: '',
    mobileNo: '',
    password: '',
    
 })
 const { role, type, teamLeaderName, members, name, email, mobileNo, password } = formData;
  
 const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const handlesubmit=(e)=>{
        e.preventDefault()
        const newUser = {
            userId: '', // Generate this based on the latest user ID
            role,
            type,
            teamLeaderName,
            members: members.split(','),
            name,
            email,
            mobileNo,
            password,
            registrationDate: new Date(),
            lastLogin:'',

          };
        axios.post('http://localhost:3001/register',newUser)
        .then(result=>{console.log(result)
        
      })
        .catch(err=>console.log(err))
      }
  return (
    <Wrapper>
        <div className='container my-5'>
            <h2>User Register</h2>
            <form>
                <div class="mb-3 col-auto"> 
                    <label class="form-label">Role</label>
                    <input type="text" class="form-control w-50" name='role' value={role} onChange={onChange}/>
                </div>
                <div class="mb-3 col-auto"> 
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control w-50" name='name' value={name} onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control w-50" name='email' value={email} onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control w-50" name='password' value={password} onChange={onChange}/>
                </div>
                
                <button  class="btn btn-primary" onClick={(e)=>handlesubmit(e)}>Register</button>
            </form>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    h1{
        color: red;
    }
    .dummy{
        color: red;
        font-size: 4re;
    }
`;

export default Regist ;