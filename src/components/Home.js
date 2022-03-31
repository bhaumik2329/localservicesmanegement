import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../img/icons/icon-1.png'
import carousel1 from '../img/carousel-1.jpg'
import about1 from '../img/about-1.jpg'
import about2 from '../img/about-2.jpg'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// css



import '../lib/animate/animate.min.css'
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import '../css/bootstrap.min.css'
import '../css/style.css'


// js


// <!-- user Template Javascript -->







export const Home = () => {


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    useEffect(() => {
        setemail(localStorage.getItem('email'))
        setpassword(localStorage.getItem('password'))






    })




    // console.log(email)
    const p1 = email != "admin@gmail.com" && email != null ?

        <>
            <Link to="" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Profile</Link>
            <Link to="/Logout" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Logout</Link>

        </>



        :
        <>
            <Link to="/SignUp" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Sign Up</Link>
            <Link to="/Login" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Login</Link>
        </>

    return (
        <>
            <div>


                {/* <!-- Spinner Start --> */}
                {/* <div class="spinner-border position-relative text-primary" role="status"></div> */}
                <img class="position-absolute top-50 start-50 translate-middle" src={icon1} alt="Icon" />
                {/* <!-- Spinner End --> */}


                {/* <!-- Topbar Start --> */}
                <div class="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div class="row gx-0 d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                                {/* <a class="text-body px-2" href="tel:+0123456789"><i class="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a> */}
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
                        {p1}


                        <Link to="Home.js" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Appointment</Link>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}





                {/* <!-- Carousel Start --> */}
                <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="carousel header-carousel position-relative">
                        <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                            <img class="img-fluid" src={carousel1} alt="" />
                            <div class="owl-carousel-inner">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-10 col-lg-8">
                                            <h1 class="display-1 text-white animated slideInDown">Best Architecture And Interior Design Services</h1>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <a href="" class="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Carousel End --> */}


                {/* <!-- About Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div class="about-img">
                                    <img class="img-fluid" src={about1} alt="" />
                                    <img class="img-fluid" src={about2} alt="" />
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}



                {/* <!-- Service Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 class="section-title">Our Services</h4>
                            <h1 class="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
                        </div>
                    </div>

                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-1.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                                    <h3 class="mb-3">Architecture</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-2.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-6.png" alt="Icon" />
                                    <h3 class="mb-3">3D Animation</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-3.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-7.png" alt="Icon" />
                                    <h3 class="mb-3">House Planning</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-4.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-8.png" alt="Icon" />
                                    <h3 class="mb-3">Interior Design</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-5.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-9.png" alt="Icon" />
                                    <h3 class="mb-3">Renovation</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-6.jpg" alt="" />
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-10.png" alt="Icon" />
                                    <h3 class="mb-3">Construction</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}



        </>
    )
}
