import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../img/icons/icon-1.png'


export const Navbar = () => {
    return (
        <>
            <div>
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
            </div>
        </>
    )
}
