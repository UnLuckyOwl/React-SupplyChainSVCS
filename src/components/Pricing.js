import React from 'react'
// import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BiShieldQuarter } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#aaaaaa', size: 64 }}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        {/* <h1 className="pricing__heading">
                            Pricing & Insurance
                        </h1> */}
                        <div className="pricing__container">
                            <Link
                                to="/contact"
                                className="pricing__container-card"
                            >
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <AiFillDollarCircle />
                                    </div>
                                    <h3>Carrier Settlement Options:</h3>
                                    <h4>Pick Your Payment Plans!</h4>
                                    {/* <p>per month</p> */}
                                    <ul className="pricing__container-features">
                                        <li>Convention Pay: 15 days</li>
                                        <li>No Fee Prompt Pay: Check ASAP</li>
                                        <li>
                                            3% Fee Accelerated Pay: Wire Same
                                            Day
                                        </li>
                                    </ul>
                                    <p>
                                        **all documentation must reach our
                                        office for any transaction to take
                                        place, ie: invoice, bill of landing and
                                        proof of delivery.
                                    </p>

                                    {/* <Button
                                        buttonSize="btn--wide"
                                        buttonColor="primary"
                                    >
                                        Choose Plan
                                    </Button> */}
                                </div>
                            </Link>

                            <Link
                                to="/contact"
                                className="pricing__container-card"
                            >
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BiShieldQuarter />
                                    </div>
                                    <h3>Fully Bonded and Insured</h3>
                                    <h4>We Have You Covered!</h4>
                                    <h5>
                                        Supply Chain Services loves working hard
                                        and that requires a team that wants to
                                        see people perform at their best. We are
                                        the glue that holds it together. We have
                                        your back, we keep you safe, along with
                                        making sure that everyone else is
                                        dotting the "i's" and crossing the
                                        "t's". We ask all of our trucks to carry
                                        $100,000 in cargo insurance and some to
                                        carry $250,000, so to back that up we
                                        carry an additional $1,000,000 in cargo
                                        insurance along with a $2,000,000
                                        umbrella policy. Safety is a service.
                                    </h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing
