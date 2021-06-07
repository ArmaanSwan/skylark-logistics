import "./HeroSection.scss";

import Hero256WEBP from "../../assets/images/hero256.webp";
import Hero512WEBP from "../../assets/images/hero512.webp";
import Hero768WEBP from "../../assets/images/hero768.webp";
import Hero256PNG from "../../assets/images/hero256.png";
import Hero512PNG from "../../assets/images/hero512.png";
import Hero768PNG from "../../assets/images/hero768.png";

import { IoArrowForwardSharp, IoCallSharp } from "react-icons/io5";

const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <div className="text">
                <h1 className="title">
                    Logistics Services <br /> Across
                    <span className="text-primary"> Canada</span>
                </h1>

                <p className="subtext">
                    We provide efficient workmanship for loading and unloading
                    containers. We also focus on the improvement of current
                    manual operations in your warehouse. We ensure that your
                    work is done on time.
                </p>

                <div className="buttons">
                    <a href="#helping-others" className="a-primary">
                        Learn More
                        <IoArrowForwardSharp className="icon" />
                    </a>

                    <a href="#contact-us" className="a-secondary">
                        <IoCallSharp className="icon" />
                        Contact Us
                    </a>
                </div>
            </div>

            <div className="image">
                <picture>
                    <source
                        type="image/webp"
                        srcSet={`${Hero256WEBP} 256w, ${Hero512WEBP} 512w, ${Hero768WEBP} 786w`}
                    />
                    <source
                        type="image/png"
                        srcSet={`${Hero256PNG} 256w, ${Hero512PNG} 512w, ${Hero768PNG} 768w`}
                    />

                    <img
                        type="image/png"
                        src={Hero768PNG}
                        alt="Warehouse workers working with computers and robotic arms"
                    />
                </picture>
            </div>
        </section>
    );
};

export default HeroSection;
