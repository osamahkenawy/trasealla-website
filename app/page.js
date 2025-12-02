import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";

import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const page = () => {
  return (
    <TekprofLayout
      header={1}
      footer={1}
      rootElements={{
        "--tekprof-primary-color": "#FC5546",
        "--tekprof-heading-color": "#244066",
        "--tekprof-gray-color": "#FAF8F6",
      }}
    >
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      <section
        className="hero-area pt-100 rpt-70 pb-130 rpb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div
                className="hero-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-15">Future Systems</span>
                <h2>Smart Automation. Real Results. Fast Growth.</h2>
                <p>
                  Stop losing bookings to competitors. Our intelligent platforms automate everything—from reservations to fleet tracking to customer service. Join car rental companies, fleet operators, and travel agencies already seeing 40% more revenue and 70% less manual work.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Start Growing Today
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-image radius-animation"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/trasealla-solutions-ai.jpg" alt="trasealla-solutions-team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Features Area start */}
      <section className="features-area rel z-1">
        <div className="container features-bg pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Future Systems
                </span>
                <h2>
                  AI-Powered Fleet Management & Automation for Smarter Operations
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      Transform your fleet operations with AI-driven automation and real-time telematics. Our intelligent platforms optimize routes, predict maintenance, automate dispatching, and maximize vehicle utilization—turning fleet data into actionable insights that reduce costs and boost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/projects/trasealla-car-rental.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Car Rental Management</Link>
                  </h4>
                  <p>
                    Complete booking, fleet, and operations platform for car rental companies. Streamline reservations, automate workflows, and boost revenue.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            > 
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/projects/livemap-1-fleet.png"
                    alt="Trasealla Solutions Fleet Management & Telematics"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Fleet Management & Telematics</Link>
                  </h4>
                  <p>
                    Real-time fleet tracking, telematics integration, and route optimization. Control your vehicles, reduce costs, and improve utilization.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/projects/trasealla-travels.png"
                    alt="Trasealla Travels"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Travel Agency Software</Link>
                  </h4>
                  <p>
                    Booking engines, CRM, and automation tools for travel agencies and tour operators. Increase conversions and manage operations efficiently.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/projects/car -service-provider.png"
                    alt="Car Service Provider System"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Car Service Provider System</Link>
                  </h4>
                  <p>
                    Comprehensive platform for automotive service centers. Manage appointments, track repairs, handle customer records, and streamline service operations with automated workflows.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="why-choose-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-10">Why Choose Us</span>
                  <h2>
                    Transform Your Business with AI-Powered Software Built for Your Industry
                  </h2>
                </div>
                <p>
                  Stop using generic software that doesn't fit. Our intelligent platforms are purpose-built for car rental companies, fleet operators, travel agencies, and service centers. Boost bookings, slash operational costs, and scale faster with automation that actually works.
                </p>
                <Link href="about" className="theme-btn mt-20 mb-50">
                  Learn More About Us
                </Link>
                <div
                  className="row"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-experts" />
                      </div>
                      <h5>
                        <Link href="service-details">AI-Driven Automation</Link>
                      </h5>
                      <p>
                        Smart workflows that reduce manual work by 70%. From automated bookings to predictive maintenance, our AI handles the heavy lifting so you can focus on growth.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-loyal-customer" />
                      </div>
                      <h5>
                        <Link href="service-details">Real-Time Insights</Link>
                      </h5>
                      <p>
                        Make data-driven decisions with live dashboards showing bookings, fleet utilization, and revenue trends. See what's working and what needs attention—instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-images">
                <div
                  className="left"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose1.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose2.jpg"
                    alt="Why Choose"
                  />
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose3.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose4.jpg"
                    alt="Why Choose"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-blue pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-white text-center mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Future Systems
                </span>
                <h2>Software & AI Solutions for Car Rental, Fleet & Travel</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-it" /> Car Rental Management System
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Complete platform for managing bookings, fleet, pricing, and operations. Increase bookings, automate workflows, and optimize revenue with real-time dashboards.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-network-security" /> Fleet Management & Telematics
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Real-time fleet tracking, GPS integration, route optimization, and vehicle analytics. Reduce costs, improve utilization, and maintain full visibility of your fleet.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-cloud" /> Travel Agency Booking System
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Powerful booking engine, CRM, and automation tools for travel agencies. Manage tours, packages, and customer relationships with integrated workflows.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service4.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-data-management" /> ERP & AI Automation
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Custom ERP systems, AI chatbots, workflow automation, and predictive analytics. Automate bookings, invoices, reminders, and optimize pricing with AI.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Achievement Area start */}
      <section
        className="achievement-area bgc-blue bgs-cover pt-100 rpt-70 pb-130 rpb-130 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/achievement-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div
                className="achievement-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="sub-title mb-10">Future Systems</span>
                  <h2>Building the Future of Mobility & Travel Technology</h2>
                </div>
                <p>
                  We help car rental, fleet, and travel businesses grow bookings, optimize operations, and scale with smart software, AI automation, and digital marketing.
                </p>
                <Link href="contact" className="theme-btn mt-20">
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="achievement-counter bg-white"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row no-gap">
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={8}
                        >
                          <Counter end={8} />
                        </span>
                        <span className="after">k+</span>
                      </div>
                      <span className="counter-title">Project Complete</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={5}
                        >
                          <Counter end={5} />
                        </span>
                        <span className="after">k+</span>
                      </div>
                      <span className="counter-title">Global Clients</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={23}
                        >
                          <Counter end={23} />
                        </span>
                        <span className="after">+</span>
                      </div>
                      <span className="counter-title">Awards Winning</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={20}
                        >
                          <Counter end={20} />
                        </span>
                        <span className="after">+</span>
                      </div>
                      <span className="counter-title">Expert Team Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement Area end */}
      {/* Team Area start */}
      <section className="team-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Meet Our Team
                </span>
                <h2>Experience Technical Team</h2>
              </div>
            </div>
          </div>
          <Team />
        </div>
      </section>
      {/* Team Area end */}
      {/* Working Process Area start */}
      <WorkingProcess2 />
      {/* Working Process Area end */}
      {/* Features Area start */}
      <section className="features-area-two pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Assessment and Strategy Development
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Enhanced Cybersecurity Protocols solutions
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Cloud Migration and Optimization
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Testimonials Area start */}
      <Testimonials />
      {/* Testimonials Area end */}
      {/* Client Logo Area start */}
      <ClientLogo />
      {/* Client Logo Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  News &amp; Blog
                </span>
                <h2>Latest Insights on Car Rental, Fleet & Travel Technology</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">Car Rental Software</a>
                    </li>
                    <li>
                      <a href="#">25 December 2024</a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      How AI Automation Transforms Car Rental Operations
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Discover how smart automation reduces manual work, increases bookings, and optimizes fleet utilization for car rental companies.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Fleet Management</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Real-Time Fleet Tracking: Complete Guide for Transportation Businesses
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Learn how telematics and real-time tracking help fleet operators reduce costs, improve safety, and maximize vehicle utilization.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Travel Technology</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Digital Marketing & SEO Strategies for Travel Agencies
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Explore how SEO, content marketing, and conversion optimization help travel agencies attract more bookings and grow revenue.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
    </TekprofLayout>
  );
};
export default page;
