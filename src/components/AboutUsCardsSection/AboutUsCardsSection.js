import "./AboutUsCardsSection.scss";

import Card from "../Card/Card";

import Services256WEBP from "../../assets/images/services256.webp";
import Services384WEBP from "../../assets/images/services384.webp";
import Services512WEBP from "../../assets/images/services512.webp";
import Services256PNG from "../../assets/images/services256.png";
import Services384PNG from "../../assets/images/services384.png";
import Services512PNG from "../../assets/images/services512.png";

import Approach256WEBP from "../../assets/images/approach256.webp";
import Approach384WEBP from "../../assets/images/approach384.webp";
import Approach512WEBP from "../../assets/images/approach512.webp";
import Approach256PNG from "../../assets/images/approach256.png";
import Approach384PNG from "../../assets/images/approach384.png";
import Approach512PNG from "../../assets/images/approach512.png";

import Relations256WEBP from "../../assets/images/relations256.webp";
import Relations384WEBP from "../../assets/images/relations384.webp";
import Relations512WEBP from "../../assets/images/relations512.webp";
import Relations256PNG from "../../assets/images/relations256.png";
import Relations384PNG from "../../assets/images/relations384.png";
import Relations512PNG from "../../assets/images/relations512.png";

const AboutUsCardsSection = () => {
    return (
        <section className="about-us-section" id="about-us">
            <Card
                webp256={Services256WEBP}
                webp384={Services384WEBP}
                webp512={Services512WEBP}
                png256={Services256PNG}
                png384={Services384PNG}
                png512={Services512PNG}
                img={Services512PNG}
                alt="Defferent services we provide"
                title="Our Services"
                text="We appreciate the opportunity to submit the proposal for our services. Our goal is to become a value-added partner."
            />
            <Card
                webp256={Approach256WEBP}
                webp384={Approach384WEBP}
                webp512={Approach512WEBP}
                png256={Approach256PNG}
                png384={Approach384PNG}
                png512={Approach512PNG}
                img={Approach512PNG}
                alt="The approach we take to do work"
                title="Our Approach"
                text="We always provide you with the most cost-effective and efficient warehouse services available. We always appreciate the best approach."
            />
            <Card
                webp256={Relations256WEBP}
                webp384={Relations384WEBP}
                webp512={Relations512WEBP}
                png256={Relations256PNG}
                png384={Relations384PNG}
                png512={Relations512PNG}
                img={Relations512PNG}
                alt="Our relationships with our curtomers"
                title="Our Relations"
                text="We believe in strong relations with our customers to provide them the best services available at the best rates and safety."
            />
        </section>
    );
};

export default AboutUsCardsSection;
