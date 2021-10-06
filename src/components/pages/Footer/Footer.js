import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons/lib'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <IconContext.Provider value={{ color: '#aaaaaa', size: 40 }}>
            <div className="footer">
                <div className="socialMedia">
                    <div className="HaydenTrans">
                        <a
                            href="https://www.haydentrans.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hayden Transportation
                        </a>
                    </div>
                    <div className="footer-social-links">
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
                    {/* <div className="pong">
                        <a
                            href="pong.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            1972 PONG
                        </a>
                    </div> */}
                </div>
                <div className="copyrightText">
                    <p>
                        Copyright 2021{' '}
                        <span> Supply Chain Services, LLC. </span>
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Footer
