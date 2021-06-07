import "./ServicesSection.scss";

import Card from "../Card/Card";

import LoadingUnloading256WEBP from "../../assets/images/loadingUnloading256.webp";
import LoadingUnloading384WEBP from "../../assets/images/loadingUnloading384.webp";
import LoadingUnloading512WEBP from "../../assets/images/loadingUnloading512.webp";
import LoadingUnloading256PNG from "../../assets/images/loadingUnloading256.png";
import LoadingUnloading384PNG from "../../assets/images/loadingUnloading384.png";
import LoadingUnloading512PNG from "../../assets/images/loadingUnloading512.png";

import RepackingReworking256WEBP from "../../assets/images/repackingReworking256.webp";
import RepackingReworking384WEBP from "../../assets/images/repackingReworking384.webp";
import RepackingReworking512WEBP from "../../assets/images/repackingReworking512.webp";
import RepackingReworking256PNG from "../../assets/images/repackingReworking256.png";
import RepackingReworking384PNG from "../../assets/images/repackingReworking384.png";
import RepackingReworking512PNG from "../../assets/images/repackingReworking512.png";

import LabelingForklifting256WEBP from "../../assets/images/labelingForklifting256.webp";
import LabelingForklifting384WEBP from "../../assets/images/labelingForklifting384.webp";
import LabelingForklifting512WEBP from "../../assets/images/labelingForklifting512.webp";
import LabelingForklifting256PNG from "../../assets/images/labelingForklifting256.png";
import LabelingForklifting384PNG from "../../assets/images/labelingForklifting384.png";
import LabelingForklifting512PNG from "../../assets/images/labelingForklifting512.png";

const ServicesSection = () => {
    return (
        <section className="services-section" id="our-services">
            <h1 className="section-title">
                Scope of <span className="text-primary">Services</span>
            </h1>

            <div className="cards">
                <Card
                    webp256={LoadingUnloading256WEBP}
                    webp384={LoadingUnloading384WEBP}
                    webp512={LoadingUnloading512WEBP}
                    png256={LoadingUnloading256PNG}
                    png384={LoadingUnloading384PNG}
                    png512={LoadingUnloading512PNG}
                    img={LoadingUnloading512PNG}
                    alt="We provide loading and unloading services"
                    title="Loading and Unloading Services"
                    text="We can load and unload any shipping containers. All of our facilities are equipped to load or unload palletized, floor-loaded, slip-sheets or drums."
                />
                <Card
                    webp256={RepackingReworking256WEBP}
                    webp384={RepackingReworking384WEBP}
                    webp512={RepackingReworking512WEBP}
                    png256={RepackingReworking256PNG}
                    png384={RepackingReworking384PNG}
                    png512={RepackingReworking512PNG}
                    img={RepackingReworking512PNG}
                    alt="We do packing and reworking projects"
                    title="Repacking and Rework Projects"
                    text="We offer a variety of an-premise Pick & Pack and Co-packing services across Canada. We can repackage products to create either larger or smaller pack formats. Our co-packing services can be customized to meet your needs."
                />
                <Card
                    webp256={LabelingForklifting256WEBP}
                    webp384={LabelingForklifting384WEBP}
                    webp512={LabelingForklifting512WEBP}
                    png256={LabelingForklifting256PNG}
                    png384={LabelingForklifting384PNG}
                    png512={LabelingForklifting512PNG}
                    img={LabelingForklifting512PNG}
                    alt="We provide labeling and forklifting operations"
                    title="Labeling, Forklifting, Clamp and Slip-sheet Operators"
                    text="We have experienced forklift operators available for hire, either for the short term (single-day) or for the long term. Whatever your needs, we have team members with the skills to assist, including high-reach, grab, slip-sheet, and a multitude of other expertise."
                />
            </div>
        </section>
    );
};

export default ServicesSection;
