import "./AboutUsCardsSection.scss";

import Card from "../Card/Card";

import OurServices from "../../assets/Services.png";
import OurApproach from "../../assets/Approach.png";
import OurRelations from "../../assets/Relations.png";

const AboutUsCardsSection = () => {
    return (
        <section className="about-us-section" id="about-us">
            <Card
                img={OurServices}
                title="Our Services"
                text="We appreciate the oppurtunity to submit the proposal for our services. Our goal is to become a value-added partener."
            />
            <Card
                img={OurApproach}
                title="Our Approach"
                text="We always provide you with the most cost effective and efficient warehouse services available. We always appreciate the best approach."
            />
            <Card
                img={OurRelations}
                title="Our Relations"
                text="We believe in the strong relation with our customer to provide them the best services available at the best rates and safety."
            />
        </section>
    );
};

export default AboutUsCardsSection;
