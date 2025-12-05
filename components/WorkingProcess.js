"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

// Schema.org HowTo structured data for SEO
const generateHowToSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Business Transformation Process",
    "description": "A proven 4-step process for transforming business operations through innovation, custom software development, AI automation, and continuous optimization.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Discovery & Assessment",
        "text": "We dive deep into your business to understand your unique challenges, operational workflows, and growth goals. Through comprehensive analysis of your current systems, customer patterns, and business processes, we identify opportunities for automation, revenue optimization, and operational efficiency.",
        "url": "#work-process"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Strategy & Planning",
        "text": "Based on our discovery findings, we craft a tailored roadmap that aligns with your business objectives. We design custom software architecture, AI automation strategies, and digital marketing plans that will transform your operations, increase conversions, and scale your business efficiently.",
        "url": "#work-process"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Implementation & Integration",
        "text": "Our expert development team brings your vision to life with agile development practices. We build your custom platform, integrate advanced technologies and APIs, deploy AI-powered automation, and seamlessly connect with payment gateways and third-party systems.",
        "url": "#work-process"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Ongoing Support & Optimization",
        "text": "Your success is our ongoing commitment. We provide 24/7 technical support, continuous performance monitoring, and data-driven optimizations. Our team analyzes business trends, optimizes pricing strategies, fine-tunes AI algorithms, and scales your platform as you grow.",
        "url": "#work-process"
      }
    ]
  };
};

const WorkingProcess = () => {
  return (
    <section 
      className="working-process-area pt-100 pb-100 rpb-70 rel z-1"
      itemScope 
      itemType="https://schema.org/HowTo"
      aria-label="Working Process"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema())
        }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <header
              className="section-title text-center mb-70 rmb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title color-primary mb-10" itemProp="name">
                Working Process
              </span>
              <h2 itemProp="name">Transforming Business Operations Through Innovation</h2>
            </header>
          </div>
        </div>
        <div className="row justify-content-between">
          <div
            className="col-lg-5"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Slider
              {...sliderProps.workingProcessTwoActive}
              className="working-process-two-active"
              aria-label="Working Process Steps"
            >
              <article className="working-process-two" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <meta itemProp="position" content="1" />
                <span className="step" aria-label="Step 1">Step 01</span>
                <h3 itemProp="name">Deep Business Discovery</h3>
                <p itemProp="text">
                  We analyze your business operations, customer patterns, and workflows to identify automation opportunities and revenue growth potential.
                </p>
              </article>
              <article className="working-process-two" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <meta itemProp="position" content="2" />
                <span className="step" aria-label="Step 2">Step 02</span>
                <h3 itemProp="name">Strategic Roadmap Design</h3>
                <p itemProp="text">
                  Custom software architecture, AI automation strategies, and digital marketing plans tailored to transform your operations and scale your business.
                </p>
              </article>
              <article className="working-process-two" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <meta itemProp="position" content="3" />
                <span className="step" aria-label="Step 3">Step 03</span>
                <h3 itemProp="name">Agile Development & Integration</h3>
                <p itemProp="text">
                  Building your custom platform, integrating advanced technologies, deploying AI automation while keeping your business running smoothly.
                </p>
              </article>
              <article className="working-process-two" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
                <meta itemProp="position" content="4" />
                <span className="step" aria-label="Step 4">Step 04</span>
                <h3 itemProp="name">Continuous Optimization</h3>
                <p itemProp="text">
                  24/7 support, performance monitoring, and data-driven optimizations to maximize revenue, customer satisfaction, and operational efficiency as you grow.
                </p>
              </article>
            </Slider>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="working-process-image-two ms-lg-auto mb-30 rmt-40">
              <img
                src="/assets/images/work-process/working-process2.png"
                alt="Business transformation process workflow showing four steps: Discovery, Strategy, Implementation, and Optimization"
                loading="lazy"
                itemProp="image"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = ({ containerClass = "container" }) => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (eventKey) => {
    setToggle(toggle === eventKey ? 0 : eventKey);
  };

  return (
    <section 
      className="working-process-area rel z-1" 
      id="work-process"
      itemScope 
      itemType="https://schema.org/HowTo"
      aria-label="Working Process"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema())
        }}
      />
      <div
        className={`features-bg pt-130 rpt-100 pb-120 rpb-90 ${containerClass}`}
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <header
              className="section-title text-center mb-70"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title color-primary mb-10">
                Working Process
              </span>
              <h2 itemProp="name">From Vision to Reality: Our Proven Process for Business Success</h2>
              <meta itemProp="description" content="A comprehensive 4-step process for transforming business operations through innovation, custom software development, AI automation, and continuous optimization." />
            </header>
          </div>
        </div>
        <Accordion
          defaultActiveKey="collapseOne"
          className="accordion working-process"
          id="working-process"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <article className="accordion-item" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
            <meta itemProp="position" content="1" />
            <div className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey="collapseOne"
                className={`accordion-button ${
                  toggle === 1 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(1)}
                aria-expanded={toggle === 1}
                aria-controls="collapseOne"
              >
                <span className="step" aria-label="Step 1">Step 01</span>
                <span className="title" itemProp="name">Discovery &amp; Assessment</span>
                <span className="icon" aria-hidden="true">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseOne">
              <div className="accordion-body" id="collapseOne">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p itemProp="text">
                        We dive deep into your business to understand your unique challenges, operational workflows, and growth goals. Through comprehensive analysis of your current systems, customer patterns, and business processes, we identify opportunities for automation, revenue optimization, and operational efficiency.
                      </p>
                      <ul className="list-style-one mt-25" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Business Operations Analysis &amp; Workflow Mapping
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Current System Audit &amp; Technology Assessment
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Revenue &amp; Customer Pattern Analysis
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Competitive Landscape &amp; Market Opportunity Review
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="/assets/images/work-process/dicovery_assesment.jpg"
                        alt="Business discovery and assessment process - analyzing operations, workflows, and identifying growth opportunities"
                        loading="lazy"
                        itemProp="image"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </article>
          <article className="accordion-item" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
            <meta itemProp="position" content="2" />
            <div className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey="collapseTwo"
                className={`accordion-button ${
                  toggle === 2 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(2)}
                aria-expanded={toggle === 2}
                aria-controls="collapseTwo"
              >
                <span className="step" aria-label="Step 2">Step 02</span>
                <span className="title" itemProp="name">Strategy &amp; Planning</span>
                <span className="icon" aria-hidden="true">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseTwo">
              <div className="accordion-body" id="collapseTwo">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p itemProp="text">
                        Based on our discovery findings, we craft a tailored roadmap that aligns with your business objectives. We design custom software architecture, AI automation strategies, and digital marketing plans that will transform your operations, increase conversions, and scale your business efficiently.
                      </p>
                      <ul className="list-style-one mt-25" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Custom Software Architecture &amp; Platform Design
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> AI Automation Strategy &amp; Workflow Optimization
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Digital Marketing &amp; Growth Strategy
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Implementation Timeline &amp; Milestone Planning
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="/assets/images/work-process/strategy_and_planning.jpg"
                        alt="Strategic planning and roadmap design for business transformation with custom software architecture and AI automation"
                        loading="lazy"
                        itemProp="image"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </article>
          <article className="accordion-item" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
            <meta itemProp="position" content="3" />
            <div className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey="collapseThree"
                className={`accordion-button ${
                  toggle === 3 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(3)}
                aria-expanded={toggle === 3}
                aria-controls="collapseThree"
              >
                <span className="step" aria-label="Step 3">Step 03</span>
                <span className="title" itemProp="name">Implementation &amp; Integration</span>
                <span className="icon" aria-hidden="true">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseThree">
              <div className="accordion-body" id="collapseThree">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p itemProp="text">
                        Our expert development team brings your vision to life with agile development practices. We build your custom platform, integrate advanced technologies and APIs, deploy AI-powered automation, and seamlessly connect with payment gateways and third-party systems—all while keeping your business running smoothly.
                      </p>
                      <ul className="list-style-one mt-25" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Custom Platform Development &amp; Deployment
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Advanced Technology Integration &amp; API Connections
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> AI Automation Implementation &amp; Testing
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Payment Gateway &amp; Third-Party System Integration
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="/assets/images/work-process/implementation_and_integeration.jpg"
                        alt="Agile development and system integration process - building custom platforms with AI automation and API connections"
                        loading="lazy"
                        itemProp="image"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </article>
          <article className="accordion-item" itemScope itemType="https://schema.org/HowToStep" itemProp="step">
            <meta itemProp="position" content="4" />
            <div className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey="collapseFour"
                className={`accordion-button ${
                  toggle === 4 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(4)}
                aria-expanded={toggle === 4}
                aria-controls="collapseFour"
              >
                <span className="step" aria-label="Step 4">Step 04</span>
                <span className="title" itemProp="name">
                  Ongoing Support &amp; Optimization
                </span>
                <span className="icon" aria-hidden="true">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseFour">
              <div className="accordion-body" id="collapseFour">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p itemProp="text">
                        Your success is our ongoing commitment. We provide 24/7 technical support, continuous performance monitoring, and data-driven optimizations. Our team analyzes business trends, optimizes pricing strategies, fine-tunes AI algorithms, and scales your platform as you grow—ensuring your business stays ahead of the competition.
                      </p>
                      <ul className="list-style-one mt-25" itemProp="itemListElement" itemScope itemType="https://schema.org/ItemList">
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> 24/7 Technical Support &amp; System Monitoring
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Performance Analytics &amp; Revenue Optimization
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> AI Model Refinement &amp; Automation Tuning
                        </li>
                        <li itemProp="itemListElement">
                          <i className="far fa-check" aria-hidden="true" /> Scalability Planning &amp; Feature Enhancements
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="/assets/images/work-process/optimization.jpg"
                        alt="Ongoing support and optimization services - 24/7 technical support, performance monitoring, and continuous business improvement"
                        loading="lazy"
                        itemProp="image"
                        width="600"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </article>
        </Accordion>
      </div>
    </section>
  );
};
