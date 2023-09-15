import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div className='about'>
        <img src='src/pages/image2.jpg' width="1000" height="200" ></img>
      </div>

      <div className='mission'>
        <div>
          <h2>Our Mission</h2>
          <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
        </div>
        <img src='src/pages/image1.webp' width="400" height="400"></img>
      </div>

      <div className='mission'>
        <img src='src/pages/image1.webp' width="400" height="400"></img>
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
              <img src="src/pages/image1.webp" class="d-block w-100" alt="..." height="500"></img>
            </div>
            <div class="carousel-item">
              <img src="src/pages/image1.webp" class="d-block w-100" alt="..." height="500"></img>
            </div>
            <div class="carousel-item">
              <img src="src/pages/image1.webp" class="d-block w-100" alt="..." height="500"></img>
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

    </Wrapper>
  )
}

const Wrapper = styled.section`

.about{
  margin-right: 200px;
  margin-left: 200px;
}
.mission{
  margin-top : 100px;
  margin-right: 200px;
  margin-left: 200px;
  display : flex;
}
h2{
  text-align : center;
font-family : Cursive;
}
p{
  font : 10px;
}

.history
{
  font : 15px;
}
.images
{
  margin-top : 100px;
}

`;

export default About