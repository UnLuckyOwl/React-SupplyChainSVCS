import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: '40' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            {/* <GiTruck className="navbar-icon" /> */}
                            <img
                                className="navbar-icon"
                                src="https://img.icons8.com/glyph-neue/50/000000/interstate-truck.png"
                                alt="truck icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    filter: 'invert(1)',
                                }}
                            />
                            Supply Chain Services
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/pricing"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/loads"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Loads
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/contact" className="btn-link">
                                        <Button buttonStyle="btn--outline">
                                            CONTACT US
                                        </Button>
                                    </Link>
                                ) : (
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
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
