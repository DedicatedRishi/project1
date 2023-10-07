import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import Bg from '../public/images/pratik/bg.jpg';



const Registration = () => {
  const [role, setRole] = useState('');
  
  const [registrationType, setRegistrationType] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpButton, setShowOtpButton] = useState(false);
  const [otp, setOtp] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isInvalidOtp, setIsInvalidOtp] = useState(false);


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [isCaptchaEntered, setIsCaptchaEntered] = useState(true);
  const [isCaptchaSubmitted, setIsCaptchaSubmitted] = useState(true);
  const [showCaptchaMessage, setShowCaptchaMessage] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');



  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);

    // Reset registration type and other fields when role changes
    setRegistrationType('');
    setEmail('');
    setShowOtpButton(false);
    setOtp('');
    setShowSubmitButton(false);
    setRecaptchaValue('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRegistrationTypeChange = (event) => {
    setRegistrationType(event.target.value);

  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Validate the email format (you can add more complex validation if needed)
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);

    // Update the state to show/hide the OTP button based on email validation
    setShowOtpButton(isValidEmail);
    
  };  

  
  const handleSendOtp = () => {
    // Backend developer: Send a request to the backend to generate and send OTP to the provided email.
    // You will need to call a backend API that generates and sends OTP to the email.
    // Example API request:
    // POST /api/send-otp
    // Request Body: { "email": email }
    // Backend will generate the OTP, send it to the provided email, and respond with success or failure.
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Backend developer: Send the entered OTP for verification to the backend.
    // You will need to call a backend API that verifies the entered OTP.
    // Example API request:
    // POST /api/verify-otp
    // Request Body: { "email": email, "otp": otp }
    // Backend will verify the OTP and respond with success or failure.
  };


  const handleOtpChange = (event) => {
    const enteredOtp = event.target.value;
    setOtp(enteredOtp);
    setShowSubmitButton(enteredOtp.length === 4);
  };

  const uOtp = 1010 ;
  const handleOtpVerification = () => {
    // Assuming you have a backend API to verify the OTP
    // You would make an API call here to verify the OTP entered by the user
    // For simplicity, we'll consider it verified if the entered OTP is '1234'
    if (otp == uOtp) {
      setIsOtpVerified(true);
      setIsInvalidOtp(false);
    } else {
      setIsOtpVerified(false);
      setIsInvalidOtp(true);
    }
  };

  const closePopup = () => {
    setIsOtpVerified(false);
    setIsInvalidOtp(false);
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


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const calculatePasswordStrength = (password) => {
    // Define your password strength criteria here
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const averageRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (strongRegex.test(password)) {
      return 'strong';
    } else if (averageRegex.test(password)) {
      return 'average';
    } else {
      return 'weak';
    }
  };
  
  const getPasswordStrengthColor = (strength) => {
    switch (strength) {
      case 'weak':
        return 'red';
      case 'average':
        return 'orange';
      case 'strong':
        return 'green';
      default:
        return 'transparent';
    }
  };

  const getPasswordStrengthText = (strength) => {
    switch (strength) {
      case 'weak':
        return 'Weak';
      case 'average':
        return 'Average';
      case 'strong':
        return 'Strong';
      default:
        return '';
    }
  };
  

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleCaptchaChange = (event) => {
    setEnteredCaptcha(event.target.value);

    const enteredCaptcha = event.target.value;
    // Assuming the captcha length is 6 characters, you can modify this accordingly
    setIsCaptchaEntered(enteredCaptcha.length === 6);
  };
  
  const handleSubmitCaptcha = () => {
    const correctCaptcha = captcha; 
   
    if (enteredCaptcha === correctCaptcha) {
      setShowCaptchaMessage('Entered captcha is correct');
      // Logic for handling correct captcha submission
      console.log('Captcha is correct!');
    } else {
      setShowCaptchaMessage('Entered captcha is wrong');
    }
  };
  
 

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
          value={role}
          onChange={handleRoleChange}
        >
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="judge">Judge</option>
        </select>
      </div>


      {role === 'student' && (

      <form onSubmit={handleFormSubmit} >

      <div className="mb-3">
          <label className="form-label"></label>
          <div className="d-flex justify-content-center">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="individual"
                name="registrationType"
                value="individual"
                checked={registrationType === 'individual'}
                onChange={handleRegistrationTypeChange}
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
                name="registrationType"
                value="team"
                checked={registrationType === 'team'}
                onChange={handleRegistrationTypeChange}
              />
              <label className="form-check-label" htmlFor="team">
                Team
              </label>
            </div>
          </div>
        </div>

        {/* ... (other form fields) */}
        {registrationType === 'team' && (
          <>
            <div className="mb-3">
              <label htmlFor="teamLeaderName" className="form-label">
                Team Leader Name
              </label>
              <input type="text" className="form-control" id="teamLeaderName" placeholder="Team Leader Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember1" className="form-label">
                Team Member 1
              </label>
              <input type="text" className="form-control" id="teamMember1" placeholder="Team Member 1" />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember2" className="form-label">
                Team Member 2
              </label>
              <input type="text" className="form-control" id="teamMember2" placeholder="Team Member 2" />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember3" className="form-label">
                Team Member 3
              </label>
              <input type="text" className="form-control" id="teamMember3" placeholder="Team Member 3" />
            </div>
            <div className="mb-3">
              <label htmlFor="teamMember4" className="form-label">
                Team Member 4
              </label>
              <input type="text" className="form-control" id="teamMember4" placeholder="Team Member 4" />
            </div>
          </>
        )}
        
        {registrationType === 'individual' && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
          )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />        </div>
        
       
      {showOtpButton && (
                <div className="mb-3 d-flex align-items-center">

        <button type="button" className="btn btn-secondary" onClick={handleSendOtp}>
          Send OTP
        </button>
      
       
       
        
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="number"
              className="form-control input-otp"
              id="otp"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={4}
            />
        
          <button type="submit" className="btn btn-primary btn-submit-otp"  onClick={handleOtpVerification}  disabled={!otp || otp.length !== 4} >
              Submit
            </button>
           
      
          </div>
      )}
          {isOtpVerified && (
        <div className="popup success">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Verification Done
          </div>
        </div>
      )}

      {isInvalidOtp && (
        <div className="popup error">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Invalid OTP
          </div>
        </div>
      )}




        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile No
          </label>
          <input type="text" className="form-control" id="mobile" placeholder="Mobile No" />
        </div>
       
     

        <div className="mb-3">
  <label htmlFor="password" className="form-label">
    Password
  </label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      id="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button
      type="button"
      className="btn btn-light"
      onClick={handleTogglePassword}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
  <div className="password-strength-bar">
    <div
      className="strength-indicator"
      style={{
        width: `${(password.length / 12) * 100}%`,
        backgroundColor: getPasswordStrengthColor(
          calculatePasswordStrength(password)
        ),
      }}
    ></div>
  </div>

  <div className={`password-strength-text ${calculatePasswordStrength(password)}`}>
  {password.length === 0 ? 'Password Strength' : getPasswordStrengthText(calculatePasswordStrength(password))}
</div>
  
  {!isValidPassword(password) && (
    <div className="error-text changebyrishi">
      * Password must be at least 8 characters, contain at least one special
      character, one number, one capital and one lowercase letter.
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPassword !== password && confirmPassword && (
          <div className="error-text">*Passwords do not match.</div>
        )}
      </div>


         {/* Add reCAPTCHA */}
         {/* Captcha Generator */}
         <div className="container">
        <header>Captcha Verification</header>
        <div className="input_field captch_box">
          <input type="text" value={captcha} disabled />
          <button className="refresh_button" onClick={handleRefreshCaptcha}>
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
        <div className="input_field captch_input">
          <input type="text" placeholder="Enter captcha" onChange={handleCaptchaChange} />
        </div>

        <div className={`message ${showCaptchaMessage ? 'active' : ''}`}>
  {showCaptchaMessage}
</div>
      
      <div className={`input_field button ${showSubmitButton ? 'enabled' : 'disabled'}`}>
        <button onClick={handleSubmitCaptcha}>Submit Captcha</button>
      </div>

      </div>


      { email && mobile && password && confirmPassword && isCaptchaEntered && isCaptchaSubmitted && showCaptchaMessage === 'Entered captcha is correct' ? (
  <button type="submit" className="btn btn-primary">
    Register
  </button>
) : (
  <button type="button" className="btn btn-primary" disabled>
    Register
  </button>
)}

        
         {/* when need use navlink here at place of span login
         <NavLink to="#" className="login-link">
  <span className="login-text">Login</span>
</NavLink>
         */}
         <div className="already-have-account">
        Already have an account? <NavLink to={"/login"}className="login-text">Login</NavLink>
      </div>

        
      </form  >
            )}

               {/*this is for admin*/}

               {role === 'admin' && (
        <form  onSubmit={handleFormSubmit}>
          {/* ... (additional form fields for admin) */}

          <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
      </div>

         
      <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />        </div>
        
       
      {showOtpButton && (
                <div className="mb-3 d-flex align-items-center">

        <button type="button" className="btn btn-secondary" onClick={handleSendOtp}>
          Send OTP
        </button>
      
       
       
        
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="number"
              className="form-control input-otp"
              id="otp"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={4}
            />
        
          <button type="submit" className="btn btn-primary btn-submit-otp"  onClick={handleOtpVerification}  disabled={!otp || otp.length !== 4} >
              Submit
            </button>
           
      
          </div>
      )}
          {isOtpVerified && (
        <div className="popup success">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Verification Done
          </div>
        </div>
      )}

      {isInvalidOtp && (
        <div className="popup error">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Invalid OTP
          </div>
        </div>
      )}




        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile No
          </label>
          <input type="text" className="form-control" id="mobile" placeholder="Mobile No" />
        </div>
     

        <div className="mb-3">
  <label htmlFor="password" className="form-label">
    Password
  </label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      id="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button
      type="button"
      className="btn btn-light"
      onClick={handleTogglePassword}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
  <div className="password-strength-bar">
    <div
      className="strength-indicator"
      style={{
        width: `${(password.length / 12) * 100}%`,
        backgroundColor: getPasswordStrengthColor(
          calculatePasswordStrength(password)
        ),
      }}
    ></div>
  </div>
  {!isValidPassword(password) && (
    <div className="error-text">
      * Password must be at least 8 characters, contain at least one special
      character, one number, one capital and one lowercase letter.
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPassword !== password && confirmPassword && (
          <div className="error-text">*Passwords do not match.</div>
        )}
      </div>


         {/* Add reCAPTCHA */}
         {/* Captcha Generator */}
         <div className="container">
        <header>Captcha Generator</header>
        <div className="input_field captch_box">
          <input type="text" value={captcha} disabled />
          <button className="refresh_button" onClick={handleRefreshCaptcha}>
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
        <div className="input_field captch_input">
          <input type="text" placeholder="Enter captcha" onChange={handleCaptchaChange} />
        </div>

        <div className={`message ${showCaptchaMessage ? 'active' : ''}`}>
  {showCaptchaMessage}
</div>
      
      <div className={`input_field button ${showSubmitButton ? 'enabled' : 'disabled'}`}>
        <button onClick={handleSubmitCaptcha}>Submit Captcha</button>
      </div>

      </div>


      { email && mobile && password && confirmPassword && isCaptchaEntered && isCaptchaSubmitted && showCaptchaMessage === 'Entered captcha is correct' ? (
  <button type="submit" className="btn btn-primary">
    Register
  </button>
) : (
  <button type="button" className="btn btn-primary" disabled>
    Register
  </button>
)}

        
         {/* when need use navlink here at place of span login
         <NavLink to="#" className="login-link">
  <span className="login-text">Login</span>
</NavLink>
         */}
         <div className="already-have-account">
        Already have an account? <span className="login-text">Login</span>
      </div>


        </form>
      )}


         {/* This is for judge page */}

         {role === 'judge' && (
        <form  onSubmit={handleFormSubmit}>
          {/* ... (additional form fields for admin) */}

          <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
      </div>

         
      <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />        </div>
        
       
      {showOtpButton && (
                <div className="mb-3 d-flex align-items-center">

        <button type="button" className="btn btn-secondary" onClick={handleSendOtp}>
          Send OTP
        </button>
      
       
       
        
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="number"
              className="form-control input-otp"
              id="otp"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={4}
            />
        
          <button type="submit" className="btn btn-primary btn-submit-otp"  onClick={handleOtpVerification}  disabled={!otp || otp.length !== 4} >
              Submit
            </button>
           
      
          </div>
      )}
          {isOtpVerified && (
        <div className="popup success">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Verification Done
          </div>
        </div>
      )}

      {isInvalidOtp && (
        <div className="popup error">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            Invalid OTP
          </div>
        </div>
      )}




        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile No
          </label>
          <input type="text" className="form-control" id="mobile" placeholder="Mobile No" />
        </div>
       
     

        <div className="mb-3">
  <label htmlFor="password" className="form-label">
    Password
  </label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      id="password"
      placeholder="Password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button
      type="button"
      className="btn btn-light"
      onClick={handleTogglePassword}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
  <div className="password-strength-bar">
    <div
      className="strength-indicator"
      style={{
        width: `${(password.length / 12) * 100}%`,
        backgroundColor: getPasswordStrengthColor(
          calculatePasswordStrength(password)
        ),
      }}
    ></div>
  </div>
  {!isValidPassword(password) && (
    <div className="error-text">
      * Password must be at least 8 characters, contain at least one special
      character, one number, one capital and one lowercase letter.
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPassword !== password && confirmPassword && (
          <div className="error-text">*Passwords do not match.</div>
        )}
      </div>


          {/* Add reCAPTCHA */}
         {/* Captcha Generator */}
         <div className="container">
        <header>Captcha Generator</header>
        <div className="input_field captch_box">
          <input type="text" value={captcha} disabled />
          <button className="refresh_button" onClick={handleRefreshCaptcha}>
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
        <div className="input_field captch_input">
          <input type="text" placeholder="Enter captcha" onChange={handleCaptchaChange} />
        </div>

        <div className={`message ${showCaptchaMessage ? 'active' : ''}`}>
  {showCaptchaMessage}
</div>
      
      <div className={`input_field button ${showSubmitButton ? 'enabled' : 'disabled'}`}>
        <button onClick={handleSubmitCaptcha}>Submit Captcha</button>
      </div>

      </div>


      { email && mobile && password && confirmPassword && isCaptchaEntered && isCaptchaSubmitted && showCaptchaMessage === 'Entered captcha is correct' ? (
  <button type="submit" className="btn btn-primary">
    Register
  </button>
) : (
  <button type="button" className="btn btn-primary" disabled>
    Register
  </button>
)}

        
         <div className="already-have-account">
        Already have an account? <span className="login-text">Login</span>
      </div>


        </form>
      )}

    </Wrapper>
  );
};

const Wrapper = styled.section`
    width: 50%;
  margin: auto;
  padding: 20px;
  background-color: #fff;

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

  .changebyrishi{
    color: yellow !important;
  }
  .error-text {
    color: green;
    font-size: 0.9em;
    margin-top: 5px;
  }

  .error-mismatch {
    margin-bottom: 15px;
  }

/* styling for OTP section */
.mb-3.d-flex.align-items-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; 
  margin-bottom: 1rem;
}

/* Style for the OTP input */
.input-otp {
  width: 200px; /* Adjust the width as needed */
padding-left: 20px;
margin: 0 10px;}

/* Style for the "Submit OTP" button */
.btn-submit-otp {
  margin: 0 10px;
}
  
  .popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;}

.popup-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}


.popup-content .close {
  position: absolute;
  margin-left: 140px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 1.2em;
  color: #555;
  
  border-radius: 50%;
  padding: 5px;
}
.popup-content .close:hover {
  color: red;
}
.popup.success .popup-content {
  border: 2px solid #00ff00; /* Green border for success */
}

.popup.error .popup-content {
  border: 2px solid #ff0000; /* Red border for error */
}

.popup.success .popup-content {
  color: #00ff00; /* Green text for success */
}

.popup.error .popup-content {
  color: #ff0000; /* Red text for error */
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

  
  .container {
  position: relative;
  max-width: 300px;
  width: 100%;
  border-radius: 12px;
  padding: 15px 25px 25px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

header {
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.input_field {
  position: relative;
  height: 45px;
  margin-top: 15px;
  width: 100%;
}

.refresh_button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: #826afb;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}

.refresh_button:active {
  transform: translateY(-50%) scale(0.98);
}

.input_field input,
.button button {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 8px;
}

.input_field input {
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.captch_box input {
  color: #6b6b6b;
  font-size: 22px;
  pointer-events: none;
}

.captch_input input:focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.message {
  font-size: 14px;
  margin: 14px 0;
  display: none;
}

.message.active {
  display: block;
  color: #826afb ; /* Set the color to green for the correct captcha */
}



.button button {
  background: #826afb;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.button button:hover {
  background: #6345d1; /* Adjust the hover background color as needed */
}

.button button:active {
  transform: scale(0.99);
}

.button button.disabled {
  opacity: 0.6;
  pointer-events: none;
}

.button button.enabled {
  opacity: 1;
  pointer-events: auto;
}




  .input-group .btn .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

.input-group .btn-light:hover .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

.input-group .btn-light:focus .eye-icon {
  fill: white;
  width: 20px; /* Adjust width to make it smaller */
  height: 20px; /* Adjust height to make it smaller */
}

/* Updated CSS for a smaller password strength bar */

.password-strength-bar {
  width: 20%;
  height: 4px; /* Adjust the height for a smaller bar */
  background-color: #f0f0f0; /* Base color of the strength bar */
  border-radius: 5px;
  margin-top: 5px;
  overflow: hidden;
}

.strength-indicator {
  height: 100%;
  border-radius: 5px;
  width: 5%;
}


.password-strength-text {
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  color: black; /* Set the font color to black */
}

/* Adjust the colors for weak, average, and strong */
.strength-indicator {
  background-color: transparent; /* Default color */
}

.strength-indicator.average {
  background-color: orange; /* Color for average strength */
}

.strength-indicator.strong {
  background-color: green; /* Color for strong strength */
}


.already-have-account {
    text-align: center;
    margin-top: 20px;
    font-size: 1.1em;
  }

  .login-link {
  text-decoration: none;
}

background: url(${Bg}) no-repeat center center fixed;
    background-size: cover;

.login-text {
  color: blue; /* or any other color you prefer */
  /* Add any other styles you want for the login text */
}

`;

export default Registration; 