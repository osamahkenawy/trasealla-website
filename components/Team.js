"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const Team = () => {
  return (
    <Slider {...sliderProps.teamSlider} className="team-slider">
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="/assets/images/team/alaa-ui-designer_trasealla.jpg" alt="Alaa Salem - UI/UX Designer" />
        </div>
        <div className="content">
          <h5 className="name">Alaa Salem</h5>
          <span className="designations">UI/UX Designer</span>
        </div>
      </div>
      
    
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="/assets/images/team/yara_alnajar_product_owner_trasealla.jpeg" alt="Yara Alnajar - Product Owner" />
        </div>
        <div className="content">
          <h5 className="name">Yara Alnajar</h5>
          <span className="designations">Product Owner</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="/assets/images/team/rana_sallom_HR_specialist_trasealla.jpeg" alt="Rana Sallom - HR Specialist" />
        </div>
        <div className="content">
          <h5 className="name">Rana Sallom</h5>
          <span className="designations">HR Specialist</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="/assets/images/team/kesnia_general_manager.jpg" alt="Legal Advisor" />
        </div>
        <div className="content">
          <h5 className="name">Kesenia Pavolva </h5>
          <span className="designations">General Manager</span>
        </div>
      </div>
    </Slider>
  );
};
export default Team;
