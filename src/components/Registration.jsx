import React, { useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';


const Registration = () => {
  const [role, setRole] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [email, setEmail] = useState('');
  const [showOtpButton, setShowOtpButton] = useState(false);
  const [otp, setOtp] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRoleChange = (event) => {
    setRole(event.target.value);
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
    // Simulate sending a 4-digit OTP
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOtp.toString());
    setShowSubmitButton(true);
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

      <form>

      <div className="mb-3">
          <label className="form-label">Type:</label>
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

        <button type="button" className="btn btn-secondary">
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
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
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
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

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
            )}

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
