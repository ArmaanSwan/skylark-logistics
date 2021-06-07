import "./HelpingOthersSection.scss";

import Helping256WEBP from "../../assets/images/helpingOthers256.webp";
import Helping512WEBP from "../../assets/images/helpingOthers512.webp";
import Helping768WEBP from "../../assets/images/helpingOthers768.webp";
import Helping256PNG from "../../assets/images/helpingOthers256.png";
import Helping512PNG from "../../assets/images/helpingOthers512.png";
import Helping768PNG from "../../assets/images/helpingOthers768.png";

const HelpingOthersSection = () => {
    return (
        <section className="helping-others-section" id="helping-others">
            <h1 className="mobile-section-title">
                Helping Companies Across{" "}
                <span className="text-primary">Canada</span>
            </h1>
            <div className="image">
                <picture>
                    <source
                        type="image/webp"
                        srcSet={`${Helping256WEBP} 256w, ${Helping512WEBP} 512w, ${Helping768WEBP} 786w`}
                    />
                    <source
                        type="image/png"
                        srcSet={`${Helping256PNG} 256w, ${Helping512PNG} 512w, ${Helping768PNG} 768w`}
                    />
                    <img
                        type="image/png"
                        src={Helping768PNG}
                        alt="Five people sitting together on a large piece of puzzle, helping each other out"
                    />
                </picture>
            </div>
            <div className="text">
                <h1 className="desktop-section-title">
                    Helping Companies Across{" "}
                    <span className="text-primary">Canada</span>
                </h1>
                <p className="sub-text">
                    Skylark Logistics is a leading staffing provider located in
                    Canada. Every day, we help the right talent find work and
                    businesses find qualified employees.
                </p>
                <h2 className="text-primary sub-title">Advantages:</h2>
                <ul className="advantages-list">
                    <li>
                        We charge our customers flat rate and pay our employees
                        flat rate as well. This ensures that your work is done
                        on time.
                    </li>
                    <li>We offer loading and unloading of containers.</li>
                    <li>All our associates are fully insured.</li>
                    <li>We have an efficient dispatch system.</li>
                    <li>
                        We offer complete inventory reports for each container
                        unloaded, including product details and totals for your
                        record.
                    </li>
                    <li>Container reports are also available.</li>
                </ul>
            </div>
        </section>
    );
};

export default HelpingOthersSection;
