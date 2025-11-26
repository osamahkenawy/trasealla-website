"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Hero = () => {
  return (
    <section
      id="home"
      className="slider-area bgs-cover pt-185 pb-160"
      style={{ backgroundImage: "url(assets/images/slider/slider-bg.jpg)" }}
    >
      <div className="container">
        <Slider
          {...sliderProps.mainSliderActive}
          className="main-slider-active"
        >
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Future Systems</span>
              <span className="h2">Trasealla Solutions</span>
              <h1>Software That Moves Your Business</h1>
              <Link href="contact" className="theme-btn">
                Book a Demo <i className="fas fa-long-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Future Systems</span>
              <span className="h2">Trasealla Solutions</span>
              <h1>Software That Moves Your Business</h1>
              <Link href="contact" className="theme-btn">
                Book a Demo <i className="fas fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Hero;
