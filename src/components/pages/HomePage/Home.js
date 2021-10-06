import React, { useState } from 'react'
import './Home.css'
import Pricing from '../../Pricing'
import About from '../about/About'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import Loads from '../Loads/Loads'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { IconContext } from 'react-icons/lib'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import heli from '../../media/Heli.jpg'
import pvs from '../../media/PVS.jpg'
import military from '../../media/military.jpg'
import kteca from '../../media/KTECA.jpg'
import ex from '../../media/excavator.jpg'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'

function Home() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <IconContext.Provider value={{ color: '#aaaaaa', size: 40 }}>
            <>
                <div className="home-banner">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={heli} className="sliderimg" alt="" />
                        <img src={pvs} className="sliderimg" alt="" />
                        <img src={military} className="sliderimg" alt="" />
                        <img src={kteca} className="sliderimg" alt="" />
                        <img src={ex} className="sliderimg" alt="" />
                    </AliceCarousel>

                    <div className="content">
                        <h1>Heavy Haul Transportation</h1>
                        <p>Family Owned and Operated Since 2002</p>
                        <Link
                            to="/contact"
                            className="btn-link"
                            onClick={handleClick}
                        >
                            <Button
                                buttonStyle="btn--outline"
                                buttonSize="btn--mobile"
                            >
                                CONTACT US
                            </Button>
                        </Link>

                        <div className="header-social-links">
                            <a
                                className="fb"
                                href="https://www.facebook.com/SupplyChainServices/"
                                title="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookSquare />
                            </a>
                            <a
                                className="tt"
                                href="https://twitter.com/supplychain02"
                                title="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitterSquare />
                            </a>
                            <a
                                className="insta"
                                href="https://www.instagram.com/supplychainservices/"
                                title="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                            <a
                                className="yt"
                                href="https://www.youtube.com/watch?v=eYtwO-XgkuM"
                                title="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <About />
                <Services />
                <Pricing />
                <Loads />
                <Contact />
                <Footer />
            </>
        </IconContext.Provider>
    )
}

export default Home
