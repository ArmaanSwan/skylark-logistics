import "./TopContactBar.scss";
import { IoCallSharp } from "react-icons/io5";

const TopContactBar = () => {
    return (
        <div className="top-contact-bar">
            <IoCallSharp className="icon icon-white" />
            <span>+1(778) 233-5100</span>
        </div>
    );
};

export default TopContactBar;
