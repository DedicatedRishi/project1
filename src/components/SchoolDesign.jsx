import React from "react";
import styled from "styled-components";
import building_1 from '../assets/building_1.jpg';
import indoor_1 from '../assets/indoor_1.jpg';
import indoor_3 from '../assets/indoor_3.jpg';
import indoor_6 from '../assets/indoor_6.jpg';
import outdoor_1 from '../assets/outdoor_1.jpg';
import outdoor_2 from '../assets/outdoor_2.jpg';
import outdoor_3 from '../assets/outdoor_3.jpg';
const SchoolDesign = () => {
    return (
        <Wrapper>

            <section class="school-banner">
                <h1>Welcome to Our School</h1>
                <p>Discover Our Spacious Campus</p>
                <p>School is an educational institution designed to provide learning spaces and learning environments.Campus Area Size is 22,000 sq. ft</p>
            </section>
            <div className="">
                <section className="indoor">
                    <div class="container">
                        <h2 class="mt-5 mb-4 text-center">Our Facilities</h2>

                        <div class="row">
                            <h3 className="">Indoor Facilities</h3>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={indoor_1} alt="Facility 1" />
                                    <div class="card-body">
                                        <h5 class="card-title">VR Hadeset</h5>
                                        <p class="card-text">We offer various indoor facilities</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={indoor_3} alt="Facility 2" />
                                    <div class="card-body">
                                        <h5 class="card-title">Library</h5>
                                        <p class="card-text">We offer various indoor facilities</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={indoor_6} alt="Facility 3" />
                                    <div class="card-body">
                                        <h5 class="card-title">Class Room</h5>
                                        <p class="card-text">We offer various indoor facilities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="outdoor">
                    <div class="container">
                        <div class="row">
                            <h3 className="">Outdoor Facilities</h3>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={outdoor_2} alt="Facility 1" />
                                    <div class="card-body">
                                        <h5 class="card-title">Running</h5>
                                        <p class="card-text">Our outdoor facilities include sports fields and recreational areas.</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={outdoor_1} alt="Facility 2" />
                                    <div class="card-body">
                                        <h5 class="card-title">Football</h5>
                                        <p class="card-text">Our outdoor facilities include sports fields and recreational areas.</p>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card facility-card">
                                    <img src={outdoor_3} alt="Facility 3" />
                                    <div class="card-body">
                                        <h5 class="card-title">Badminton</h5>
                                        <p class="card-text">Our outdoor facilities include sports fields and recreational areas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
     </Wrapper>
    )
}

const Wrapper = styled.section`
 
 .school-banner {
    background:rgba(0,0,0,0.5)url(${building_1});
    background-size: cover;
    background-position: center;
    height: 500px; 
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-blend-mode:darken;
}
.school-banner h1 {
    font-size: 36px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
}

.school-banner p {
    font-size: 20px;
    font-weight:600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.container {
    max-width: 1200px;
}

.facility-card {
    transition: transform 0.2s ease-in-out; 
}

.facility-card:hover {
    transform: scale(1.05); 
}

.facility-card img {
    max-width: 100%;
    height: auto;
}

/* Media Queries */
@media screen and (max-width: 767px) {
    .school-banner h1 {
        font-size: 28px;
    }
    .school-banner p {
        font-size: 16px;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .school-banner h1 {
        font-size: 32px;
    }
    .school-banner p {
        font-size: 18px;
    }
}

@media screen and (min-width: 992px) {
    .school-banner h1 {
        font-size: 36px;
    }
    .school-banner p {
        font-size: 20px;
    }
}

 `
export default SchoolDesign;
