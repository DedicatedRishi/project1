import React from 'react';
import styled from 'styled-components';
import image2 from '../public/images/vaishnavi/image2.jpg'
import image1 from '../public/images/vaishnavi/image1.webp'

const About = () => {
    

  return (
    <Wrapper>
      <div className='detail'>
      <div className='about'>
        <img src={image2} width="1000" height="200" ></img>
      </div>

      <div className='mission'>
        <div>
          <h2>Our Mission</h2>
          <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
        </div>
        <img src={image1} width="400" height="400"></img>
      </div>

      <div className='mission'>
        <img src={image1} width="400" height="400"></img>
        <div>
          <h2>Our Vision</h2>
          <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
        </div>
      </div>

      <div className='history'>
        <h2>Our History</h2>
        <div className='images'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={image1} class="d-block w-100" alt="imag1" height="500"></img>
            </div>
            <div class="carousel-item">
              <img src={image1} class="d-block w-100" alt="imag2" height="500"></img>
            </div>
            <div class="carousel-item">
              <img src={image1} class="d-block w-100" alt="img3" height="500"></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>

      <div className='judges'>
        <h1>Judge Panel</h1>

        <div class="container">
      <div class="image"> <img src="https://i.pinimg.com/736x/fb/14/36/fb14367fee180889b66e95d3a0659a4a.jpg" alt="This is my image." height="400px"/> <h2>Name</h2></div> 
      <div class="image"> <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="This is my second image." height="400px"/> <h2>Name</h2></div> 
      <div class="image"> <img src="https://i.pinimg.com/564x/af/e3/eb/afe3eb181af33e1af29ec78448631382.jpg" alt="My third image." height="400px"/> <h2>Name</h2></div>
      <div class="image"> <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="This is my second image." height="400px"/><h2>Name</h2> </div>
      <div class="image"> <img src="https://i.pinimg.com/564x/30/33/4c/30334cb60ebcb05da34f6fc9bd2a9d8e.jpg" alt="This is my second image." height="400px"/><h2>Name</h2> </div>    
    </div>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.detail{
  background-color :skyblue;
}
.about{
  margin-right: 200px;
  margin-left: 200px;
}
.mission{
  text-align: justify;
  margin-top : 100px;
  margin-right: 200px;
  margin-left: 200px;
  display : flex;
  
}
h1, h2{
  text-align : center;
font-family : Cursive;
text-decoration: underline;
}
p{
  font : 10px;
  margin-top : 20px;
  margin-left :10px;
}

.history
{
  font : 15px;
}
.images
{
  margin-top : 100px;
}

.judges{
  margin-top : 50px;
  background-color : skyblue;
}
}

.container {
  align-items: center; 
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  display : flex;
  
}
.image{
    float: left;
  padding: 5px;
  margin-top : 10px;
  
 
`;

export default About 