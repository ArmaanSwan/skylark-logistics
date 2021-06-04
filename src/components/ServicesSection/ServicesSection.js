import "./ServicesSection.scss";

import Card from "../Card/Card";

import LoadingAndUnloading from "../../assets/LoadingAndUnloading.png";
import RepackingAndReworking from "../../assets/RepackingAndReworking.png";
import ForkliftandLabeling from "../../assets/ForkliftandLabeling.png";

const ServicesSection = () => {
    return (
        <section className="services-section" id="our-services">
            <h1 className="section-title">
                Scope of <span className="text-primary">Services</span>
            </h1>

            <div className="cards">
                <Card
                    img={LoadingAndUnloading}
                    title="Loading and Unloading Services"
                    text="We can load and unload any and all shipping containers. All of our facilities are equipped to load or unload palletized, floor loaded, slip-sheets or drums."
                />
                <Card
                    img={RepackingAndReworking}
                    title="Repacking and Rework Projects"
                    text="We offer a variety of an-premise Pick & Pack and Co-packing services across Canada. We can repackage products to create either larger or smaller pack formats. Our co-packing services can be customized to meet your needs."
                />
                <Card
                    img={ForkliftandLabeling}
                    title="Labeling, Forklifting, Clamp and Slip-sheet Operators"
                    text="We have experienced forklift operators available for hire, either for short term (single-day) or for long term. Whatever your needs, we have team members with the skills to assist, including high-reach, grab, slip-sheet and a multitude of other expertise."
                />
            </div>
        </section>
    );
};

export default ServicesSection;
