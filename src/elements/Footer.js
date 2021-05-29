import React from 'react'
import Button from './Button'
import IconText from './IconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{width: 350}}>
                        <IconText />
                        <h6 className="text-gray-500 brand-text">We kaboom your beauty holiday instantly and memorable.</h6>
                    </div>
                    <div className="col-auto mr-5">
                        <h6 className="mt-2">
                            For Beginners
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">
                            Connect Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:shaulajasminetya22@gmail.com">
                                    shaulajasminetya22@gmail.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+6281392657117">
                                    +628 -1392 - 6571 - 17
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Tresa, Bekasi, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 • All rights reserved • Tresa
                    </div>
                </div>
            </div>
        </footer>
    )
}
