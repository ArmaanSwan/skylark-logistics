import "./Navbar.scss";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className="header">
            <a href="/skylark-logistics">
                <Logo className="logo" />
            </a>
            <nav className="navbar">
                <ul className="links">
                    <li className="link">
                        <a href="#home">Home</a>
                    </li>
                    <li className="link">
                        <a href="#about-us">About Us</a>
                    </li>
                    <li className="link">
                        <a href="#our-services">Our Services</a>
                    </li>
                    <li className="link">
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
                <IoMenuSharp className="icon icon-primary ham-icon" />
            </nav>
        </header>
    );
};

export default Navbar;
