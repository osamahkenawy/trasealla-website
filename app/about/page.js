import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout header={1} footer={1}>
      <PageBanner pageName="About Company" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                    About Trasealla Solutions
                  </span>
                  <h2>
                    Future Systems – Software That Moves Your Business
                  </h2>
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                      Trasealla Solutions builds smart software platforms, AI automations, and digital marketing solutions specifically for car rental companies, fleet & transportation businesses, and travel agencies. Founded by Osamah Alaaeldin Kenawy, we combine software products, AI & automation, and digital marketing to help clients grow bookings, optimize operations, and scale.
                    </p>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    data-aos-offset={50}
                  >
                    <p>
                      With offices in Abu Dhabi (UAE), Alexandria (Egypt), Milan (Italy), and São Paulo (Brazil), we serve mobility and travel businesses globally. Our vision is "Future Systems" – automation and technology that transforms how car rental, fleet, and travel companies operate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div
                className="about-trusted-partners-area"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="trusted-clients-wrap pb-40 mb-30">
                  <h5>10m+ Trusted Partners</h5>
                  <div className="trusted-clients">
                    <img
                      src="assets/images/testimonials/client1.jpg"
                      alt="Client"
                    />
                    <img
                      src="assets/images/testimonials/client2.jpg"
                      alt="Client"
                    />
                    <img
                      src="assets/images/testimonials/client3.jpg"
                      alt="Client"
                    />
                    <img
                      src="assets/images/testimonials/client4.jpg"
                      alt="Client"
                    />
                  </div>
                </div>
                <img src="assets/images/logos/trustpilot.png" alt="Logo" />
                <p>8930+ reviews</p>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      {/* About Page Image Start */}
      <div className="about-page-image-area">
        <div className="container-fluid">
          <div className="about-page-wrap">
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/about/about-page-image1.jpg"
                alt="About Image"
              />
            </div>
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/about/about-page-image2.jpg"
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Page Image End */}
      {/* About Page Experience Start */}
      <section className="about-page-experience-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="about-page-experience-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Experience Excellence with Trasealla Solutions</h2>
                </div>
                <p>
                  At Trasealla Solutions, excellence is at the core of everything we do. Our team of dedicated professionals combines deep industry expertise in car rental, fleet management, and travel technology with a passion for innovation to deliver high-quality, tailored software solutions that drive real results. We pride ourselves on meticulous attention to detail, our commitment to client satisfaction, and our ability to turn complex operational challenges into simple, automated workflows. When you partner with us, you're not just getting a service provider—you're gaining a trusted partner committed to helping your car rental, fleet, or travel business succeed. Discover what true excellence means with Trasealla Solutions by your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page Experience End */}
      {/* Team Area start */}
      <section className="team-area bgc-gray py-130 rpy-100 rel z-1">
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
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpt-100 rpb-75  rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50 rmb-0"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Why Choose Us
                </span>
                <h2>Industry-Focused Solutions for Car Rental, Fleet & Travel</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 border-right border-left for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    Providing highly customizable solutions tailored to each
                    client’s unique needs can set you apart. Clients are
                    looking.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Scalable solutions allow companies to grow without needing
                    to overhaul their software infrastructure architecture .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    Prioritizing security ensures protection and compliance with
                    industry standards and regulations, safeguarding against.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right border-left"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    Providing highly customizable solutions tailored to each
                    client’s unique needs can set you apart. Clients are
                    looking.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Scalable solutions allow companies to grow without needing
                    to overhaul their software infrastructure architecture .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-md-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    Prioritizing security ensures protection and compliance with
                    industry standards and regulations, safeguarding against.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Counter Area start */}
      <div className="counter-area rel z-1">
        <div className="container-fluid">
          <div className="counter-wrap pt-70 pb-50 bgc-primary">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Project
                      <br /> Complete
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      We’ve Global
                      <br /> Trusted Clients
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Awards
                      <br /> Winning
                    </span>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      IT &amp; Tech
                      <br /> Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area end */}
      {/* Testimonial Area start */}
      <Testimonials2 bgClass="" />
      {/* Testimonial Area end */}
      {/* Client Logo Area start */}
      <ClientLogo containerClass="client-logo-area style-two for-border-top" />
    </TekprofLayout>
  );
};
export default page;
