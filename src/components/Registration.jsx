import React, { useState, useRef,useEffect } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';



const Registration = (props) => {

  const [userId, setUserId] = useState('')
  const [role, setRole] = useState('')
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('');
  const [member1, setMember1] = useState('')
  const [member2, setMember2] = useState('')
  const [member3, setMember3] = useState('')
  const [member4, setMember4] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [showOtpButton, setShowOtpButton] = useState(false);
  const [teamLeaderName, setTeamLeaderName] = useState('')
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const[data,setData]=useState()

   

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Validate the email format (you can add more complex validation if needed)
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);

    // Update the state to show/hide the OTP button based on email validation
    setShowOtpButton(isValidEmail);
  };
     
    const handleSendOtp = () => {
    // Simulate sending a 4-digit OTP
       let mailOtp =1415
        // if(mailOtp == otp){
        //   alert("Email Verified Successfuly")
        // }
        // else{
        //   alert("Invaild OTP")
        // } 
        console.log('test')
        
      };
  
  const handleOtpChange = (event) => {
    const enteredOtp = event.target.value;
    setOtp(enteredOtp);
    setShowSubmitButton(enteredOtp.length === 4);
  };

  const handleRecaptchaChange = (value) => {
    // Handle reCAPTCHA value change
    setRecaptchaValue(value);
  };


  const handlePasswordChange = (event) => {
    const enteredPassword = event.target.value;
    // Validate the password against the requirements
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        enteredPassword
      );

    setPassword(enteredPassword);
    setShowSubmitButton(isValidPassword && enteredPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const enteredConfirmPassword = event.target.value;
    // Check if passwords match
    const passwordsMatch = enteredConfirmPassword === password;

    setConfirmPassword(enteredConfirmPassword);
    setShowSubmitButton(passwordsMatch && isValidPassword(password));
  };

  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };

  // Backend code

  const clearRef = useRef(null)

  // Email Verification with Otp

  const baseUrl = "http://localhost:3001";

  const sendEmail =  async(e) => {
    e.preventDefault()
    
    let dataSend = {
      email: email,
    };
    
    const res =await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    
    // HANDLING ERRORS
    .then((res) => {
      console.log(res);
      
      if (res.status > 199 && res.status < 300) {
        alert("OTP Send Successfully !");
      }
      if(res.ok){
         let data= res.json()
         console.log(`otp is:${data.otp}`)
        }
      else{ 
        alert("Process Failed")
      }
      });
    };
    

   
// Submit Form
  const handlesubmit = (e) => {

    e.preventDefault()

    axios.post('http://localhost:3001/register', {
      userId: '', // Generate this based on the latest user ID
      role,
      type,
      teamLeaderName,
      member1,
      member2,
      member3,
      member4,
      name,
      email,
      password,
      mobileNo,
      registrationDate: new Date(),
      lastLogin: '',
    })
      .then(result => {
        console.log(result)
        clearRef.current.value = ''
        alert('User Register Successfully')
      })
      .catch(err => console.log(err))
  }

  return (
    <Wrapper>
      <h1>Register</h1>
      
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role:
        </label>
        <select
          className="form-select"
          id="role"
          name='role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option >Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="judge">Judge</option>
        </select>
      </div>

      <form>

        <div className="mb-3">
          <label className="form-label">Type:</label>
          <div className="d-flex justify-content-center">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="individual"
                name="type"
                value="individual"
                checked={type === 'individual'}
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="individual">
                Individual
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="team"
                name="type"
                value="team"
                checked={type === 'team'}
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label" htmlFor="team">
                Team
              </label>
            </div>
          </div>
        </div>


        {type === 'team' && (
          <>
            <div className="mb-3">
              <label htmlFor="teamLeaderName" className="form-label">
                Team Leader Name
              </label>
              <input type="text" className="form-control" id="teamLeaderName" ref={clearRef} placeholder="Team Leader Name" name='teamLeaderName' value={teamLeaderName} onChange={(e) => setTeamLeaderName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember1" className="form-label">
                Team Member 1
              </label>
              <input type="text" className="form-control" id="teamMember1" ref={clearRef} placeholder="Team Member 1" name='member1' value={member1} onChange={(e) => setMember1(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember2" className="form-label">
                Team Member 2
              </label>
              <input type="text" className="form-control" id="teamMember2" ref={clearRef} placeholder="Team Member 2" name='member2' value={member2} onChange={(e) => setMember2(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember3" className="form-label">
                Team Member 3
              </label>
              <input type="text" className="form-control" id="teamMember3" ref={clearRef} placeholder="Team Member 3" name='member3' value={member3} onChange={(e) => setMember3(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember4" className="form-label">
                Team Member 4
              </label>
              <input type="text" className="form-control" id="teamMember4" ref={clearRef} placeholder="Team Member 4" name='member4' value={member4} onChange={(e) => setMember4(e.target.value)} />
            </div>
          </>
        )}

        {type === 'individual' && (
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" ref={clearRef} placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" ref={clearRef} placeholder="Email" name='email' value={email} onChange={handleEmailChange} required />
        </div>

        {showOtpButton && (

          <button className="btn btn-secondary" onClick={(e) => sendEmail(e)}>
            Send OTP
          </button>
        )}

        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            OTP
          </label>
          <input
            type="text"
            className="form-control"
            id="otp"
            placeholder="Enter 4-digit OTP"
            value={otp}
            onChange={handleOtpChange}
            maxLength={4}
          />
        </div>

        {showSubmitButton && (
          <button className="btn btn-primary" onClick={handleSendOtp}>
            Submit
          </button>
        )}

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile No
          </label>
          <input type="number" className="form-control" id="mobile" ref={clearRef} placeholder="Mobile No" name='mobileNo' value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            ref={clearRef}
            name='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {!isValidPassword(password) && (
            <div className="error-text">
              * Password must be at least 8 characters, contain at least one special character, one number, one capital and one lowercase letter.
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            ref={clearRef}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPassword !== password && confirmPassword && (
            <div className="error-text">*Passwords do not match.</div>
          )}
        </div>


        {/* Add reCAPTCHA */}
        <div className="mb-3">
          <ReCAPTCHA
            sitekey="6LdRm1woAAAAAK_U2fg95ODO9VASg3Kw0voB1nB8" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
        </div>

        <button className="btn btn-primary" onClick={(e) => handlesubmit(e)}>
          Register
        </button>
      </form>


    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 50%;
  margin: auto;
  padding: 20px;
  background-color: #2222;
  background: url('/pratik/images/Reg-Background.jpg') no-repeat center center fixed;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 2em;
    color: #222;
    margin-bottom: 20px;
    text-align: center;
  }

  .form-label {
    font-size: 1.2em;
    color: #222;
    display: block;
  }

  .white-text {
    color: #fff;
  }

  .form-check-input {
    margin-top: 5px;
  }

  .form-control {
    font-size: 1em;
    background-color: #444;
    color: #fff;
    border: 1px solid #222;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .form-control:focus {
    border-color: #222;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  }


  .error-text {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
  }

  .error-mismatch {
    margin-bottom: 15px;
  }


  .btn-primary {
    background-color: #222;
    margin-left: 20px;
    color: #fff;
    border: 1px solid #222;
    font-size: 1.2em;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  

  .captcha-image {
    width: 100%;
    max-width: none;
    border-radius: 0;
  }




 

`;

export default Registration;
