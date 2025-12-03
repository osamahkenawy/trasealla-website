"use client";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: "", message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <TekprofLayout >
      <PageBanner pageName="Contact" />
      <section className="contact-form-area pt-130 rpt-100 pb-120 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-info-part rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Get In Touch</span>
                  <h2>Let's Build Your Next System</h2>
                </div>
                <p>
                  Ready to transform your car rental, fleet, or travel operations? Talk to Trasealla Solutions. We'll help you choose the right software, AI automation, or digital marketing solution for your business.
                </p>
                <div className="contact-info-wrap mt-40">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      <span className="title">Our Offices</span>
                      <p>Abu Dhabi (UAE) · Alexandria (Egypt) · Milan (Italy) · São Paulo (Brazil)</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <span className="title">Email Address</span>
                      <a href="mailto:info@trasealla.com">info@trasealla.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="text">
                      <span className="title">Phone / WhatsApp</span>
                     
                      <a href="tel:+971558446048">
                        +971 55 844 6048
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-page-form z-1 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit}
                >
                  <h4>What can we help you with?</h4>
                  <p>Share your business goals and let's build something amazing together</p>
                  <div className="row mt-20">
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name here"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-25">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="write message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          data-error="Please enter your Message"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          data-hover="Send Message"
                          disabled={isSubmitting}
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Us Message"}</span>
                        </button>
                        {submitStatus.message && (
                          <div
                            id="msgSubmit"
                            className={`mt-20 ${
                              submitStatus.type === "success"
                                ? "text-success"
                                : "text-danger"
                            }`}
                            style={{
                              padding: "10px",
                              borderRadius: "5px",
                              backgroundColor:
                                submitStatus.type === "success"
                                  ? "#d4edda"
                                  : "#f8d7da",
                              color:
                                submitStatus.type === "success"
                                  ? "#155724"
                                  : "#721c24",
                            }}
                          >
                            {submitStatus.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="our-location mt-130 rmt-100">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="mb-20">Abu Dhabi Office</h5>
                  <p className="mb-20">Masdar City, Abu Dhabi, UAE</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5!2d54.6167!3d24.4255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sMasdar%20City%2C%20Abu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1706508986625!5m2!1sen!2s"
                    style={{ border: 0, width: "100%", height: "300px", borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Masdar City, Abu Dhabi Office"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="mb-20">Alexandria Office</h5>
                  <p className="mb-20">Alexandria, Egypt</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.5!2d29.9187!3d31.2001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2s!4v1706508986626!5m2!1sen!2s"
                    style={{ border: 0, width: "100%", height: "300px", borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alexandria, Egypt Office"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="mb-20">São Paulo Office</h5>
                  <p className="mb-20">São Paulo, Brazil</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.5!2d-46.6558!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a480d1%3A0x9f94c3b3a3a3a3a3!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2s!4v1706508986627!5m2!1sen!2s"
                    style={{ border: 0, width: "100%", height: "300px", borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="São Paulo, Brazil Office"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
