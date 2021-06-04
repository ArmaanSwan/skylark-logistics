import "./HeroSection.scss";

import HeroImage from "../../assets/HeroImage.png";
import { IoArrowForwardSharp, IoCallSharp } from "react-icons/io5";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="text">
                <h1 className="title">
                    Logistics Services <br /> Across
                    <span className="text-primary"> Canada</span>
                </h1>

                <p className="subtext">
                    We provide efficient workmanship for loading and unloading
                    containers and focus on the improvement on current manual
                    operations in your warehouse. We ensure that your work is
                    done in timely manner.
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
                <img
                    src={HeroImage}
                    alt="Warehouse workers working with computers and robotic arms"
                />
            </div>
        </section>
    );
};

export default HeroSection;
