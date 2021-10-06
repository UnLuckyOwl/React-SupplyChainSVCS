import React from 'react'
import './Contact.css'
// import { Link } from 'react-router-dom'
import { FaMapPin } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

function Contact() {
    return (
        <IconContext.Provider value={{ color: '#181818', size: 40 }}>
            <div className="contact">
                <div className="content">
                    <h2 className="contactBox">Contact Us</h2>
                    <p>Happy to answer any questions you might have!</p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box one">
                            <div className="icons">
                                <a
                                    href="https://duckduckgo.com/?q=13218+North+Home+Road+Liberty%2C+MO+64068&atb=v257-1&ia=web&iai=r1-0&page=1&sexp=%7B%22cdrexp%22%3A%22b%22%2C%22prodexp%22%3A%22b%22%2C%22prdsdexp%22%3A%22c%22%2C%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%7D&iaxm=maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMapPin />
                                </a>
                            </div>
                            <div className="text">
                                <h3>Address</h3>
                                <a
                                    href="https://duckduckgo.com/?q=13218+North+Home+Road+Liberty%2C+MO+64068&atb=v257-1&ia=web&iai=r1-0&page=1&sexp=%7B%22cdrexp%22%3A%22b%22%2C%22prodexp%22%3A%22b%22%2C%22prdsdexp%22%3A%22c%22%2C%22biaexp%22%3A%22b%22%2C%22msvrtexp%22%3A%22b%22%7D&iaxm=maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <p>
                                        13218 North Home Road Liberty, MO 64068
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="box two">
                            <div className="icons">
                                <a
                                    href="tel:+816-415-8500"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <FaPhoneAlt />
                                </a>
                            </div>
                            <div className="text">
                                <h3>Phone</h3>
                                <a
                                    href="tel:+816-415-8500"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <p>816-415-8500</p>
                                </a>
                            </div>
                        </div>

                        <div className="box three">
                            <div className="icons">
                                <a
                                    href="mailto:dispatch@supplychainsvcs.com"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <MdEmail />
                                </a>
                            </div>
                            <div className="text">
                                <h3>Email</h3>
                                <a
                                    href="mailto:dispatch@supplychainsvcs.com"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <p>dispatch@supplychainsvcs.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hours">
                        <h2>Hours of Operation</h2>
                        <br />
                        <p>24/7 For Emergency Purposes</p>

                        <p>Mon - Fri 7:30 am - 5:00 pm</p>

                        <p>Fax: 816-415-3712</p>

                        <p>Alt Fax: 866-779-3012</p>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Contact
