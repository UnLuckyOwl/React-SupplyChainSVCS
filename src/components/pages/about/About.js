import React from 'react'
// import { Button } from '../../Button'
import HeroSection from '../../HeroSection'
import { homeObjOne } from '../../Data'
// import { Link } from 'react-router-dom'
import './About.css'
import { IconContext } from 'react-icons/lib'
// import { FaFacebookSquare } from 'react-icons/fa'
// import { FaTwitterSquare } from 'react-icons/fa'
// import { AiFillInstagram } from 'react-icons/ai'
// import { FaYoutube } from 'react-icons/fa'

function About() {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    return (
        <IconContext.Provider value={{ color: '#8a8a8a', size: 40 }}>
            <>
                <div>
                    <HeroSection {...homeObjOne} />
                </div>
                <div className="about-banner">
                    <div className="we-content">
                        <h1>WE ARE HERE FOR YOU...</h1>

                        <p>
                            Supply Chain Services LLC has a dedicated staff that
                            will ensure all details are handled in a simple,
                            seamless and timely manner. Whenever you work with
                            our team, you can trust that you’re in great hands.
                            We want your business and want to earn it!
                        </p>
                    </div>
                </div>
            </>
        </IconContext.Provider>
    )
}

export default About
