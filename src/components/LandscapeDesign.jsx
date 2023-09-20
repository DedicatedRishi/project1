import React from 'react';
import styled from 'styled-components';
import building_1 from '../assets/building_1.jpg';
import ramtemple2 from '../assets/ramtemple2.jpg';
const LandscapeDesign =()=>{
    return(
        
  <Wrapper>
    <section class="section bg-primary">
    <div class="container">
    <h2 class="section-title text-center text-white">Shishu Vatika</h2>
    <div className=' container bg-greya'>
    <p className='text-center'>Display the theme of school celebrating Indian culture, tradition, and family values with some pictures and text.</p>
    <div class="row">
      <div class="col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 1" className='shadow img-fluid'/>
        </div>
      </div>
      <div class="col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 2"/>
        </div>
      </div>
      <div class=" col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 3"/>
        </div>
      </div>
      <div class=" col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 3"/>
        </div>
      </div>
      
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 1"/>
        </div>
      </div>
      <div class="col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 2"/>
        </div>
      </div>
      <div class=" col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 3"/>
        </div>
      </div>
      <div class=" col-md-3">
        <div class="gallery-item">
          <img src={building_1} alt="Image 3"/>
        </div>
      </div>
   </div>  
    </div>
 </div>
</section>
 

<section class="section bg-primary">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src={ramtemple2} alt="Shriram Panchayatan Temple" class="img-fluid temp_img shadow"/>
            </div>
            <div class="col-md-6">
                <h2 class="section-title">Shriram Panchayatan Temple</h2>
                <p>Display information related to  Shriram Temple within the picture.</p>
            </div>
        </div>
    </div>
</section>
  

{/* <section class="section ">
    <div class="container">
        <div class="row">
            
            <div class="col-md-4">
                <img src="auditorium.jpg" alt="Auditorium" class="img-fluid"/>
                <h3>Auditorium</h3>
                <p>Display information related to the auditorium here.</p>
            </div>
            
            <div class="col-md-4">
                <img src="library.jpg" alt="Library" class="img-fluid"/>
                <h3>Library</h3>
                <p>Display information related to the library and books here.</p>
            </div>
        
            <div class="col-md-4">
                <h3>Community Center</h3>
                <p>Display community-related information here.</p>
            </div>
        </div>
    </div>
</section> */}
        </Wrapper>
    )
}

 const Wrapper = styled.section`
 .section {
    padding: 50px;
    color:white
}
.section-title {
    font-size: 24px;
    font-weight: bold;
}
.section .temp_img{
   border:5px solid white; 
   border-radius:10px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border: 2px solid #f0f0f0;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }

  .gallery-item img {
    width: 100%;
    height: auto;
  }

  .gallery-item:hover {
    transform: scale(1.05);
  }

  
 `
export default LandscapeDesign ;