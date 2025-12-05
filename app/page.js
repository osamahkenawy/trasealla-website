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
                <h2>Where AI Meets Business Intelligence: Transform Operations with Intelligent Automation</h2>
                <p>
                  Experience the power of AI-driven platforms that think, learn, and adapt. Our neural networks process millions of data points to optimize your operations, predict trends, and automate complex workflows. Join forward-thinking businesses leveraging cutting-edge AI to achieve unprecedented efficiency and growth.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Explore AI Solutions
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
                <img src="assets/images/hero/trasealla-solutions-ai.jpg" alt="AI-powered business intelligence platform with neural networks and machine learning technology" />
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
                  Intelligent Business Ecosystems: AI-Powered Solutions That Learn and Evolve
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      Step into the future with AI systems that continuously learn from your operations. Our neural network architectures process real-time data streams, make predictive decisions, and automate complex business logic. Experience self-optimizing platforms that adapt to market changes, customer behavior, and operational patterns—transforming raw data into strategic competitive advantages.
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
                    alt="AI-powered car rental management system with intelligent automation and predictive analytics"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">AI-Powered Car Rental Intelligence</Link>
                  </h4>
                  <p>
                    Next-generation rental platform with machine learning algorithms that predict demand, optimize pricing in real-time, and automate customer interactions. Our AI analyzes booking patterns, seasonal trends, and market dynamics to maximize revenue and operational efficiency.
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
                    alt="Cognitive fleet management system with AI-driven route optimization and real-time telematics analytics"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cognitive Fleet Management System</Link>
                  </h4>
                  <p>
                    Advanced telematics platform powered by AI that processes vehicle data, driver behavior, and traffic patterns. Our intelligent system predicts maintenance needs, optimizes routes using neural networks, and provides actionable insights through advanced analytics dashboards.
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
                    alt="Intelligent travel platform with AI-powered recommendation engines and predictive demand analytics"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Intelligent Travel Platform</Link>
                  </h4>
                  <p>
                    AI-enhanced booking ecosystem with predictive analytics for travel demand, personalized recommendations, and automated customer journey management. Leverage machine learning to optimize package pricing, forecast trends, and deliver exceptional customer experiences.
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
                    alt="Smart service management hub with AI-driven scheduling and predictive maintenance algorithms"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Smart Service Management Hub</Link>
                  </h4>
                  <p>
                    Intelligent service center platform with AI-driven scheduling, predictive maintenance alerts, and automated customer communication. Our system learns from service history to optimize workflows, reduce downtime, and enhance customer satisfaction through data-driven insights.
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
                    Harness the Power of Neural Networks and Machine Learning for Business Transformation
                  </h2>
                </div>
                <p>
                  Move beyond traditional software limitations. Our AI-powered platforms use deep learning algorithms, natural language processing, and predictive analytics to create intelligent business ecosystems. Experience self-learning systems that continuously improve, adapt to your industry's unique challenges, and deliver measurable results through data-driven automation.
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
                        <Link href="service-details">Neural Network Automation</Link>
                      </h5>
                      <p>
                        Advanced AI systems that process complex business logic through deep learning models. Our neural networks automate decision-making, pattern recognition, and predictive analytics—reducing operational overhead while increasing accuracy and speed.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-loyal-customer" />
                      </div>
                      <h5>
                        <Link href="service-details">Advanced Analytics & Business Intelligence</Link>
                      </h5>
                      <p>
                        Transform raw data into strategic intelligence with AI-powered dashboards and predictive models. Our systems analyze patterns, forecast trends, and provide actionable insights through advanced data visualization and machine learning algorithms.
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
                    src="assets/images/about/trasealla-about-page-05.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/trasealla-about-page-04.jpg"
                    alt="Advanced business intelligence and data analytics dashboard"
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
                    src="assets/images/about/trasealla-about-page-03.jpg"
                    alt="Machine learning model training and neural network implementation"
                  />
                  <img
                    src="assets/images/about/trasealla-about-page-02.JPG"
                    alt="Predictive analytics platform with real-time data processing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Services Area start */}
      {/* Services Area end */}
      {/* Achievement Area start */}
      {/* <section
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
                  <h2>Pioneering the Next Generation of Intelligent Business Systems</h2>
                </div>
                <p>
                  We architect AI-powered ecosystems that transform how businesses operate. Through advanced machine learning, neural networks, and predictive analytics, we create intelligent platforms that learn, adapt, and evolve—delivering unprecedented efficiency and competitive advantages.
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
      </section> */}
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
                    alt="AI strategy and neural network architecture design with deep learning models"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">AI & Machine Learning</Link>
                    <Link href="blog">Business Intelligence</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      AI Strategy & Neural Network Architecture Design
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We design intelligent system architectures using deep learning models, machine learning algorithms, and advanced data processing frameworks to create self-optimizing business ecosystems.
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
                    alt="Machine learning implementation and model training with neural network architectures"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">AI & Machine Learning</Link>
                    <Link href="blog">Business Intelligence</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Machine Learning Implementation & Model Training
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We deploy advanced machine learning models with neural network architectures, training systems on your data to create intelligent automation that continuously improves performance and accuracy.
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
                    alt="Predictive analytics and business intelligence platform with AI algorithms"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">AI & Machine Learning</Link>
                    <Link href="blog">Business Intelligence</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Predictive Analytics & Business Intelligence Platform
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We build advanced analytics platforms that process massive datasets through AI algorithms, providing predictive insights, trend forecasting, and data-driven decision support systems.
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
      {/* <Testimonials /> */}
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
                <h2>Latest Insights on AI, Machine Learning & Intelligent Business Systems</h2>
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
                  <img src="assets/images/blog/ai/ai-robot-with-human.jpg" alt="AI automation transforming business operations with intelligent systems" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">AI & Machine Learning</a>
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
                  <img src="assets/images/blog/ai/ai-robot-with-humans.jpg" alt="Real-time fleet tracking and telematics with AI-powered analytics" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Neural Networks</Link>
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
                  <img src="assets/images/blog/ai/ai-with-robot-2.jpg" alt="Digital marketing and AI strategies for intelligent business growth" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Predictive Analytics</Link>
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
