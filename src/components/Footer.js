import React from 'react'
import Link from 'gatsby-link'

import Image from '../components/Image'

import './Footer.scss'

export default ({ globalSettings, socialSettings, navLinks }) => (
    <footer className='Footer'>
        <div className='container footer-top'>
            <div className='column-1'>
                <Image
                    className="footer-logo"
                    src="/images/uploads/logo-mobile.png"
                    alt="footer logo"
                />
            </div>
            <div className='column-2'>
                <div className="contact-socials">
                    <p className="service-title">Contact</p>

                    <ul>
                        <li className="phone"><a href="tel:+61417292705">0417 292 705</a></li>
                        <li className="email"><a href="mailto:tim@trhequinevets.com.au">tim@trhequinevets.com.au</a></li>
                    </ul>

                    <ul className="social-links">
                        <li className="phone"><a href="tel:+61417292705"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="phone"><a href="tel:+61417292705"><i className="fab fa-instagram"></i></a></li>
                        <li className="phone"><a href="tel:+61417292705"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>

            <div className='column-3'>

                <ul className="sitemap-menu">
                    <li>
                        <p className="service-title">Sitemap</p>
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link  to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/case-studies">
                            Case Studies
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                <ul className="service-menu">
                    <li>
                        <p className="service-title">Services</p>
                    </li>
                    <li>
                        <Link to="/ambulatory">
                            Ambulatory
                        </Link>
                    </li>
                    <li>
                        <Link  to="/treatment">
                            Treatment
                        </Link>
                    </li>
                    <li>
                        <Link to="/lameness-evaluation">
                            Lameness Evaluation
                        </Link>
                    </li>
                    <li>
                        <Link to="/performance-assessment">
                            Poor Performance Assessment
                        </Link>
                    </li>
                </ul>

                <ul className="service-menu2">
                    <li>
                        <Link to="/routine-surgery">
                            Routine Surgery
                        </Link>
                    </li>
                    <li>
                        <Link to="/diagnostics">
                            Diagnostics - Radiography
                        </Link>
                    </li>
                    <li>
                        <Link to="/examinations">
                            Pre-Purchase Examinations
                        </Link>
                    </li>
                </ul>
            </div>

        </div>

        <div className='container footer-bottom taLeft'>
            <span>Copyright 2018 TRH Enquine Vets. <a href="https://thriveweb.com.au/">Site by Thrive Web</a></span>
        </div>
    </footer>
)
