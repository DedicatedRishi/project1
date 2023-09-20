import React from 'react';
import styled from 'styled-components';
import img3 from '../public/images/pratik/img3.jpg';
import img1 from '../public/images/pratik/img1.jpg';
import img2 from '../public/images/pratik/img2.jpg';
import bg from '../public/images/pratik/background.jpg';
import banner from '../public/images/pratik/banner3.jpg'


function Home() {
  return (
    <Wrapper>
    <div className="homepage"> 

    <div className="card">
        <h1 className="home-title">
          "Arch <br /> Architectural <br /> Competition 2023: <br /> Shape the Future:
        </h1>
        <h3 className="home-subtitle">
          Unleash Your Architectural Creativity. Register Now!
        </h3>
        </div>

   
    </div>

    <CarouselHeading>
        <h1>Discover Inspiring Architectural Designs</h1>
      </CarouselHeading>


    <CarouselWrapper>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="slide1" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Discover Inspiring Architectural Designs</h3>
                <p>Explore a world of innovation and creativity in architecture.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Join the Competition Today!</h3>
                <p>Showcase your architectural prowess and win exciting prizes.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Collaborate and Innovate</h3>
                <p>Collaborate with fellow architects and shape the future of design.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </CarouselWrapper>
      
      <VideoHeading>
        <h1>What's that about Watch Video</h1>
      </VideoHeading>

<YoutubeVideo>

      <div className="youtube-video">
    {/* Add your YouTube video here */}
    <iframe
     
      src="https://www.youtube.com/embed/ly8orBNiNQM"
      title="YouTube video"
      frameborder="0"
      allowfullscreen
    ></iframe>

    
  </div>
  <div className="right-content">
    <h2>Video with description</h2>
    <p>Encourage users to watch <br/> the video by featuring an attractive thumbnail or a video play button overlay on the video poster image.</p>
  </div>
  </YoutubeVideo>

  <Banner>
  <img src={banner} alt="Banner" className="banner-img" />
        <div className="overlay">
          <h1>"Join the Competition"</h1>
          <p>The wording should be clear, concise, and persuasive, guiding users through their journey on your website.</p>
          <button className="register-button">Register</button>
        </div>
  </Banner>
    </Wrapper>
  );
}

{/*css part*/}


const Wrapper = styled.section`
  /* index.css */
  body {
  overflow-x: hidden;
  


  background-color: rgba(205, 217, 230, 0.9);
  margin-bottom: 2.2rem;}
  
    
  .card {
    text-align: center;
    padding: 20px;
    border-radius: 10px; /* Optional: Adds rounded corners to the card */
    background: rgba(205, 217, 230, 0.9); 
    width: 40%; /* Adjust the width of the card as needed */
  height: 58%;
  top: 30%;
  left: 30%;
  }
  .homepage {
  background: url(${bg}) no-repeat center center;
 background-size: cover;
 position: relative;
 /* Adjust the size percentage as needed */
  width: 100%;
  height: 100vh;
}

  
  .home-title {
    font-size: 50px; /* Set the title font size */
    color: #333; /* Set the title text color */
    font-family: 'Arial', sans-serif; /* Use a common font family */
    padding: 10px;
    text-align: center; /* Move the title to the left */
    font-family: 'Arial', sans-serif;
    font-weight: bold;
}
  
  .home-subtitle {
    font-size: 20px; /* Set the subtitle font size */
    color: #0077cc; /* Set the subtitle text color to a vibrant blue */
    text-align: center; /* Move the subtitle to the left */
    font-style: italic;
  
  font-weight: bold;
  }
  @media (max-width: 1045px){
    ${'' /* .card{
      height: 45%;

    } */}
    .home-title {
    font-size: 30px; 
    }
  }
  @media (max-width: 768px) {
    
    .homepage {
      background-size: cover; /* Ensure background image fits on smaller screens */
    }

    .card {
      width: 90%; /* Adjust the width for smaller screens */
      margin: auto; /* Center the card */
      top: unset; /* Remove top positioning */
      left: unset; /* Remove left positioning */
    }

    /* Reduce font sizes for smaller screens */
    .home-title {
      font-size: 24px;
    }

    .home-subtitle {
      font-size: 14px;
    }
  }
  
`;


const CarouselHeading = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 50px;
  font-size: 32px !important;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);


`;


const CarouselWrapper = styled.div`
  /* Your custom styles for the carousel component */

  /* Example styles: Adjust as needed */
  width: 50%;
  
padding-top: 4%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
   /* Styles for carousel control arrows */
   .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: black; /* Arrow color */
    border: solid black; /* Arrow border color */
    border-width: 0 3px 3px 0; /* Thickness of the arrow */
    height: 50px; /* Arrow height */
    width: 45px; /* Arrow width */
  }

  .carousel-control-prev:hover,
  .carousel-control-next:hover {
    opacity: 1;
  }

  /* Styles for carousel captions */
  .carousel-caption h3,
  .carousel-caption p {
    color: black; /* Font color for the carousel captions */
  }
  @media (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
    margin: auto; /* Center the carousel */
  }

`;
{/*Heading below wrapper*/}

const VideoHeading = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 50px;
  font-size: 32px !important;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);



  @media (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
    margin: auto; /* Center the carousel */
  }

`;

const YoutubeVideo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px; /* Adjust the top margin as needed */
  padding: 60px;
  border: 3px solid #333; /* Add a border for visual appeal */
  border-radius: 10px; /* Optional: Adds rounded corners */
  background-color: rgb(0, 56, 168, 0.8); /* Semi-transparent white background */
  box-sizing: border-box;
  margin-left: 90px;
  margin-right: 80px;
  margin-bottom: 30px;

  
  .youtube-video {
    width: 60%; /* Adjust the width of the video container */
  }

  .right-content {
    width: 45%; /* Adjust the width of the text content */
    text-align: center;
    color: #fff; /* Adjust the text color */
  }

  .right-content h2 {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left;
  }

  .right-content p {
    text-align: left;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack video and content on smaller screens */
    align-items: center; /* Center align on smaller screens */
    margin-left: 0; /* Remove left margin */
    margin-right: 0; /* Remove right margin */
   
  margin-bottom: 30px;
  .right-content p {
 
 
  }
  
  
  .youtube-video {
    width: 60%; /* Adjust the width of the video container */
  }

  .right-content {
    width: 45%; /* Adjust the width of the text content */
    text-align: center;
    color: #fff; /* Adjust the text color */
  }

  .right-content h2 {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left;
  }

  .right-content p {
    text-align: left;
    font-size: 18px;
  }

  }

`;

const Banner = styled.div`
  position: relative;
  padding-top: 100px;
  text-align: center;
  margin-top: 20px; /* Adjust margin as needed */

  .banner-img {
    /* Add styles for your banner image */
    width: 100%; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Optional: Adds rounded corners */
  }

  .overlay {
    position: absolute;
    top: 64%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    color: #333; /* Adjust text color as needed */
  }

  .overlay h1 {
    font-size: 56px; /* Adjust heading font size */
    font-weight: bold; /* Adjust heading font weight */
    margin-bottom: 10px; /* Adjust margin as needed */
  }

  .overlay p {
    font-size: 24px; /* Adjust paragraph font size */
    margin-bottom: 20px; /* Adjust margin as needed */
  }

  .register-button {
    background-color: #0077cc;
    color: #fff; /* Adjust button text color */
    padding: 10px 20px; /* Adjust padding as needed */
    border: none;
    border-radius: 5px; /* Optional: Adds rounded corners */
    font-size: 20px; /* Adjust button font size */
    cursor: pointer;
  }
  @media (max-width: 768px){
    .overlay h1 {
    font-size: 45px;
    padding-top: 10px;
    }
    .banner-img {
    /* Add styles for your banner image */
    width: 100%; /* Adjust width as needed */
    height: 15rem; /* Maintain aspect ratio */
    border-radius: 10px; /* Optional: Adds rounded corners */
  }
  }
`;

export default Home;