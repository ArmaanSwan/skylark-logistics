import "./Footer.scss";

import { ReactComponent as WhiteLogo } from "../../assets/Logo-white.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="text-1">
                <WhiteLogo />
                <p className="sub-text">
                    SKYLARK LOGISTICS SERVICES has been providing quality
                    services to our customers. We pride ourselves at
                    understanding customer's specifications and operations which
                    result in us becoming a value added paetener in your
                    warehouse operations.
                </p>
            </div>
            <div className="text-2">
                <h2>Important Links</h2>
                <ul className="links">
                    <li>
                        <a href="#home" className="link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about-us" className="link">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#our-services" className="link">
                            Our Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact-us" className="link">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-3">
                <h2>Contact Us</h2>
                <ul className="address">
                    <li>+1(778) 233-5100</li>
                    <li>208-33405 Bourquin PL Abbotsford</li>
                    <li>BC V2S 7C4 CANADA</li>
                </ul>
            </div>
            <div className="copyright-bar">
                Copyright 2021 - Skylark Logistics
            </div>
        </footer>
    );
};

export default Footer;
