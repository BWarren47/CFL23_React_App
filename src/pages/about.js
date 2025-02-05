import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Student1 from "../images/student1.png";
import Student2 from "../images/student2.png";
import '../css/about.css';
/* eslint-disable jsx-a11y/anchor-is-valid */
function About() {
    function showCFLpage() {
        window.location.href = "https://www.liberty.edu/business/center-for-financial-literacy/";
    }

        return(
            <>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
                    />

                    <section className="headerab">
                        <Navbar></Navbar>
                        <div className="text-box">
                        <h1>Center for Financial Literacy</h1>
                        <p>Providing biblical financial wisdom with practical applications</p>
                        <a className="hero-btn" id="libertyBtn" onClick={showCFLpage}>
                        Visit our website
                        </a>
                    </div>
                    </section>

                    <section className="reviews">
                        <h1>Testimonials</h1>
                        <p>This is what some of the student financial planners have to say.</p>
                        <div className="row">
                            <div className="reviews-col">
                                <img src={Student1} alt="Student1" />
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                eos laudantium.
                                </p>
                                <h3>John Smith</h3>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            </div>

                            <div className="reviews-col">
                            <img src={Student2} alt="Student2"/>
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed
                                est magni totam molestias voluptatem voluptate nemo ipsa quod a
                                accusamus aspernatur doloremque, dolorem ullam! Quasi esse nihil
                                eos laudantium.
                                </p>
                                <h3>David Blaine</h3>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            </div>
                        </div>
                        </section>

                        <section className="contact-us">
                        <h1>Contact CFL</h1>
                        <div className="row">
                            <div className="contact-col">
                            <div>
                                <i className="fas fa-home"></i>
                                <span>
                                <h5>1971 University Blvd</h5>
                                <p>Lynchburg, VA</p>
                                </span>
                            </div>

                            <div>
                                <i className="fas fa-phone"></i>
                                <span>
                                <h5>704-824-8789</h5>
                                <p>
                                    Monday - Saturday <br />
                                    8am - 5pm
                                </p>
                                </span>
                            </div>

                            <div>
                                <i className="fas fa-envelope"></i>
                                <span>
                                <h5>cfl@liberty.edu</h5>
                                <p>Email us</p>
                                </span>
                            </div>
                            </div>
                            <div className="contact-col">
                            <form action="../UI/backend/form-handler.php" method="post">
                                <input type="text" name="name" placeholder="Enter your Name" required />
                                <input type="text" name="email" placeholder="Enter your Email Address" required />
                                <input type="text" name="subject" placeholder="Enter your Subject" required />
                                <textarea name="message" placeholder="Message" required></textarea>
                                <button type="submit" className="hero-btn gold-btn" id="LibertyBtn">
                                Send Message
                                </button>
                            </form>
                            </div>
                        </div>
                        </section>

                    <Footer></Footer>
            </>
        );
    }

export default About;