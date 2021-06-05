import "./ContactUsSection.scss";

import { IoCallSharp, IoLocationSharp, IoMail } from "react-icons/io5";

const ContactUsSection = () => {
    return (
        <section className="contact-us-section" id="contact-us">
            <div className="text">
                <h1>
                    Have Any Query? <br />{" "}
                    <span className="text-primary">Contact Us</span>
                </h1>

                <div className="contact-card">
                    <IoCallSharp className="icon icon-primary" />
                    +1(778) 233-5100
                </div>
                <div className="contact-card">
                    <IoLocationSharp className="icon icon-primary" />
                    BC V2S 7C4 CANADA
                </div>
                <div className="contact-card">
                    <IoMail className="icon icon-primary" />
                    <span className="contact-card-email">
                        skylarklogisticshelp@gmail.com
                    </span>
                </div>
            </div>
            <form className="contact-us-form">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    autoComplete="off"
                    required
                />
                <textarea name="message" id="message" placeholder="Message" />
                <button type="submit" className="btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactUsSection;
