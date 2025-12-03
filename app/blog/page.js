import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout header={1} footer={1}>
      <PageBanner pageName="Blog Standard" />
      <section className="blog-standard-page py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="blog-standard-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-standard1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <i className="far fa-user" />{" "}
                      <Link href="blog">Osamah Kenawy</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> 20 January 2025
                    </li>
                    <li>
                      <i className="far fa-comments" /> Comments (15)
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/ai-solutions">
                      AI Solutions for Modern Businesses: Transform Operations with Intelligent Automation
                    </Link>
                  </h3>
                  <p>
                    Artificial Intelligence is transforming how businesses operate today. From automating repetitive tasks to predicting customer behavior, AI solutions help companies increase efficiency, reduce costs, and deliver better customer experiences.
                  </p>
                  <Link
                    href="/blog/ai-solutions"
                    className="blog-read-more"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div
                className="blog-standard-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-standard2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <i className="far fa-user" />{" "}
                      <Link href="blog">Osamah Kenawy</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> 15 January 2025
                    </li>
                    <li>
                      <i className="far fa-comments" /> Comments (12)
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/car-rental">
                      Complete Guide to Car Rental Management Systems: Boost Efficiency and Revenue
                    </Link>
                  </h3>
                  <p>
                    A comprehensive car rental management system can transform your business by automating workflows, optimizing pricing, and providing real-time insights. Learn how modern software solutions help car rental companies increase bookings and reduce operational costs.
                  </p>
                  <Link
                    href="/blog/car-rental"
                    className="blog-read-more"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div
                className="blog-standard-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/fleet-system/two-computer-monitors-and-laptop-with-information-2025-03-07-15-17-57-utc.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <i className="far fa-user" />{" "}
                      <Link href="blog">Osamah Kenawy</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> 10 January 2025
                    </li>
                    <li>
                      <i className="far fa-comments" /> Comments (8)
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/fleet-system">
                      Complete Fleet Management System Guide: Optimize Operations with Real-Time Tracking
                    </Link>
                  </h3>
                  <p>
                    Modern fleet management systems combine GPS tracking, telematics, route optimization, and predictive analytics to help businesses reduce costs, improve safety, and maximize vehicle utilization.
                  </p>
                  <Link
                    href="/blog/fleet-system"
                    className="blog-read-more"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div
                className="blog-standard-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-standard4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <i className="far fa-user" />{" "}
                      <Link href="blog">William D. Galindo</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> 25 September 2024
                    </li>
                    <li>
                      <i className="far fa-comments" /> Comments (05)
                    </li>
                  </ul>
                  <h3>
                    <Link href="blog-details">
                      Role of a Business Consulting Agency in Driving Innovation
                      Key to Business Success
                    </Link>
                  </h3>
                  <p>
                    Consulting process typically begins with an in-depth
                    analysis of your business operations, goals challenges we
                    then provide strategic recommendations and work closely with
                    you to implement solutions
                  </p>
                  <Link
                    href="blog-details"
                    className="blog-read-more"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <div
                className="blog-standard-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog-standard5.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta-two">
                    <li>
                      <i className="far fa-user" />{" "}
                      <Link href="blog">William D. Galindo</Link>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" /> 25 September 2024
                    </li>
                    <li>
                      <i className="far fa-comments" /> Comments (05)
                    </li>
                  </ul>
                  <h3>
                    <Link href="blog-details">
                      Role of a Business Consulting Agency in Driving Innovation
                      Key to Business Success
                    </Link>
                  </h3>
                  <p>
                    Consulting process typically begins with an in-depth
                    analysis of your business operations, goals challenges we
                    then provide strategic recommendations and work closely with
                    you to implement solutions
                  </p>
                  <Link
                    href="blog-details"
                    className="blog-read-more"
                    data-hover="Read More"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
              <ul
                className="pagination pt-5 flex-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li className="page-item active">
                  <span className="page-link">
                    1<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item next-item">
                  <a className="page-link" href="#">
                    Next <i className="far fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-65">
              <div className="blog-sidebar ms-lg-auto">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Search here" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="blog">Car Rental</Link> <span>(3)</span>
                    </li>
                    <li>
                      <Link href="blog">Fleet Management</Link>
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link href="blog">AI Solutions</Link>
                      <span>(4)</span>
                    </li>
                    <li>
                      <Link href="blog">Travel Technology</Link>
                      <span>(2)</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-news"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Recent Post</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/post1.jpg" alt="Post" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/ai-solutions">
                            AI Solutions for Modern Businesses
                          </Link>
                        </h5>
                        <span className="date">20 January 2025</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/post2.jpg" alt="Post" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/car-rental">
                            Complete Guide to Car Rental Management Systems
                          </Link>
                        </h5>
                        <span className="date">15 January 2025</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="assets/images/widgets/post3.jpg" alt="Post" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/fleet-system">
                            Complete Fleet Management System Guide
                          </Link>
                        </h5>
                        <span className="date">10 January 2025</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tags"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Tags</h4>
                  <div className="tag-clouds">
                    <Link href="blog">Car Rental</Link>
                    <Link href="blog">Fleet</Link>
                    <Link href="blog">AI</Link>
                    <Link href="blog">Automation</Link>
                    <Link href="blog">Software</Link>
                    <Link href="blog">Technology</Link>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/wedget-cta.jpg)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>
                    Need Professional Software Solutions for Your Business?{" "}
                  </h3>
                  <Link href="contact" className="theme-btn btn-small">
                    Get In Touch
                  </Link>
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
