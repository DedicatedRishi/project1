import React from 'react'
import styled from 'styled-components'

const Contact = () => {


  return (
    <Wrapper>
<div className='contact'>
      <div class="d-flex justify-content-center align-items-stretch">
        <div class="p-1">
          <h1>Contact Us </h1>
          <p onclick="redirectToEmail()" class="text-break">Need to get in touch with us? Either fill out the form with your inquery or find the <a href="mailto:vaishnavidraut97@gmail.com?subject = Feedback&body = Message">department email</a> you will like to conatct below.</p>
        </div>
        <div class="p-2 border border-dark">
          <form> 
            <div class="mb-3">
              <div class="col">
                <label for="exampleInputFirstName" class="form-label">First Name</label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div class="col">
                <label for="exampleInputLastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />

            </div>
            <div class="mb-3">
              <label for="exampleInput" class="form-label">What can we help you with?</label>
              <input type="text" class="form-control" id="exampleInput" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

</div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 100px;
  margin-bottom:150px;

.p-2{
  width : 30%;
  background-color : #C0C0C0;
}
.p-1{
  width : 50%;
  text-align : left;
}
.d-flex{
  margin-left: 50px;
  margin-right: 50px;
  margin-top : 15px;
  background-color : white;
  
}
h1{
  margin: 70px 0;
}

`;

export default Contact