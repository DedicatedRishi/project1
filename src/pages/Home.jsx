import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



function Home() {

    // Define the target date for the countdown (replace with your desired date)
    const targetDate = new Date("2023-12-31T23:59:00").getTime();

    // Calculate the remaining time and update it every second
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds
      };
    };
  
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []); // Run this effect only once

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
              <img src="/pratik/images/img3.jpg" className="d-block w-100" alt="slide1" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Discover Inspiring Architectural Designs</h3>
                <p>Explore a world of innovation and creativity in architecture.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/pratik/images/img1.jpg" className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Join the Competition Today!</h3>
                <p>Showcase your architectural prowess and win exciting prizes.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/pratik/images/img2.jpg" className="d-block w-100" alt="slide3" />
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
      width="560"
      height="315"
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
<Details>
  <div class="container mt-5">
    <div class="text-center">
      <h1>Welcome to the Architecture Design Competition</h1>
      <p>Submit your designs for a chance to win exciting prizes!</p>
    </div>

    <div class="mt-4">
      <h2>Eligibility:</h2>
      <ul>
        <li>All students must be currently enrolled in architecture colleges.</li>
        <li>Participation can be individual or in a team.</li>
        <li>Maximum team size: 4 members.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h2>Judgement:</h2>
      <ul>
        <li>Designs will be judged by a panel of experienced architects appointed by XYZ organisation.</li>
        <li>Three top designs in both categories will be awarded.</li>
      </ul>
    </div>

    <div class="mt-4">
      <h2>Prizes:</h2>
      <p>Selected designs in each category will receive a cash prize of 50,000/-.</p>
    </div>

    <div class="mt-4">
      
      <p class="small"><strong>Note :</strong> Designs, once submitted and selected, will become the property of XYZ Organisation. The
        organisation holds the right to use them for expansion, promotion, and construction.</p>
    </div>

    <div class="mt-4">
      <h2>Deadline:</h2>
      <p>Last Date for Submission:  31st December 
        2023</p>
    </div>

    <div class="mt-4">
  <h2>Countdown Timer:</h2>
  <div id="countdown">
  <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeRemaining.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
  </div>
</div>


  </div>
  </Details>

  <Banner>
  <img src="/pratik/images/banner3.jpg" alt="Banner" className="banner-img" />
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
  
  background-color: rgba(205, 217, 230, 0.9);

  

  .card {
    text-align: center;
    padding: 20px;
    border-radius: 10px; /* Optional: Adds rounded corners to the card */
    background: rgba(205, 217, 230, 0.9); /* Semi-transparent white background for the card */
    width: 40%; /* Adjust the width of the card as needed */
  height: 50%;
  top: 30%;
  left: 30%;
  }


  
  .homepage {
  background: url("/pratik/images/background.jpg") no-repeat center center;
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
  margin-top: 10px;
  font-weight: bold;
  }

   /* Mobile Responsive */

   @media (max-width: 576px) {
  .homepage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    left: -0%;
  margin-bottom: 100%;
    text-align: center;
    padding: 50px;
    border-radius: 30px;
    background: rgba(205, 217, 230, 0.9);
    width: 80%; /* Adjust the width of the card for smaller screens */
  }

  .home-title {
    font-size: 30px; /* Adjust the title font size for smaller screens */
  }

  .home-subtitle {
    font-size: 16px; /* Adjust the subtitle font size for smaller screens */
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


  @media (max-width: 576px) {
    font-size: 24px !important;
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

  
  @media (max-width: 576px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 20px;
    .youtube-video {
      iframe {
        width: 330%; /* Adjust the width of the video container for smaller screens */
        height:30vh; /* Adjust the height of the video container for smaller screens */
      }
      margin-bottom: 80%;
    }
    .right-content {
      width: 100%;
      margin-top: 100%;
      margin-right: 20%;
      
    }
    .right-content h2 {
      font-size: 24px;
      text-align: center;

    }
    .right-content p {
      font-size: 16px;
      text-align: center;

    }
  }
  
`;

const Details = styled.div`
  .container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color:  rgb(0, 56, 168, 0.8);
  border-radius: 10px;
  border: 3px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #fff;
}

p {
  font-size: 1.2em;
  color: #fff;
}

ul {
  list-style-type: disc;
}

li {
  font-size: 1.1em;
  color: #fff;
}

h2 {
  font-size: 1.5em;
  color: #fff;
  margin-top: 15px;
}

.small {
  font-size: 0.9em;
  color: #fff;
}

/* Adjusting margins and paddings */
.mt-4 {
  margin-top: 20px;
}

.countdown-item {
    color: red; /* Set the countdown item color to red */
    font-size: 24px; /* Adjust the font size of the countdown value */
    font-weight: bold; /* Make the countdown value bold */
    display: inline-block;
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 50%; /* Create a circular appearance */
    background-color: rgba(0, 0, 0, 0.1); /* Add a background for contrast */
  }

  .countdown-label {
    font-size: 16px; /* Adjust the font size of the countdown label */
    display: block; /* Ensure labels appear on a new line */
  }

/* Optional: Add more styling as per your preference */

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
    background-color: #0077cc; /* Adjust button background color */
    color: #fff; /* Adjust button text color */
    padding: 10px 20px; /* Adjust padding as needed */
    border: none;
    border-radius: 5px; /* Optional: Adds rounded corners */
    font-size: 20px; /* Adjust button font size */
    cursor: pointer;
  }

  @media (max-width: 576px) {
    padding-top: 50px;

    .banner-img {
      width: 100%; /* Adjust width to fill the container */
    max-width: none;
      border-radius: 0; /* Adjust as needed for the image */
    }

    .overlay {
      top: 70%; /* Adjust as needed to center the overlay */
    }

    .overlay h1 {
      font-size: 26px; /* Adjust heading font size */
      margin-bottom: 3px; /* Adjust margin as needed */
    }

    .overlay p {
      font-size: 13px; /* Adjust paragraph font size */
      margin-bottom: 1px; /* Adjust margin as needed */
    }

    .register-button {
      padding: 5px 16px; /* Adjust padding as needed */
      font-size: 10px; /* Adjust button font size */
   
   margin-bottom: 8px; }
  }
`;

export default Home;