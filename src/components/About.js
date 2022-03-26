import React from 'react'
import about1 from '../img/about-1.jpg'
import about2 from '../img/about-2.jpg'
import { Link } from 'react-router-dom'
import icon1 from '../img/icons/icon-1.png'



export const About = () => {
    return (
        <div>



            {/* <!-- Topbar Start --> */}
            <div class="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
                <div class="row gx-0 d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                            <a class="text-body px-2" href="tel:+0123456789"><i class="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a>
                            <a class="text-body px-2" href="mailto:info@example.com"><i class="fa fa-envelope-open text-primary me-2"></i>info@example.com</a>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-2">
                            <a class="text-body px-2" href="">Terms</a>
                            <a class="text-body px-2" href="">Privacy</a>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center">
                            <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-sm-square btn-outline-body me-0" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="text-primary m-0"><img class="me-3" src={icon1} alt="Icon" />Online Local Services</h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/Home" class="nav-item nav-link">Home</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                        <Link to="Service.js" class="nav-item nav-link">Services</Link>
                        <div class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu border-0 m-0">
                                {/* <a href="feature.html" class="dropdown-item">Our Features</a>
                                    <a href="project.html" class="dropdown-item">Our Projects</a>
                                    <a href="team.html" class="dropdown-item">Team Members</a>
                                    <a href="appointment.html" class="dropdown-item">Appointment</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a> */}
                            </div>
                        </div>
                        <Link to="Contact.js" class="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="SignUp.js" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Sign Up</Link>
                    <Link to="" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Login</Link>
                    <Link to="Home.js" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Appointment</Link>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}

            {/* <!-- About Start --> */}
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 class="section-title">About Us</h4>
                <h1 class="display-5 mb-4">A Creative Architecture Agency For Your Dream Home</h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                <div class="d-flex align-items-center mb-5">
                    {/* <div class="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style="width: 120px; height: 120px;"> */}
                    <h1 class="display-1 mb-n2" data-toggle="counter-up">25</h1>
                    {/* </div> */}
                    <div class="ps-4">
                        <h3>Years</h3>
                        <h3>Working</h3>
                        <h3 class="mb-0">Experience</h3>
                    </div>
                </div>
                <a class="btn btn-primary py-3 px-5" href="">Read More</a>
            </div>
            {/* <!-- About End --> */}
        </div>
    )
}
