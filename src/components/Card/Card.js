import "./Card.scss";

const Card = ({ img, title, text }) => {
    return (
        <div className="card">
            <div className="image" style={{ backgroundImage: `url(${img})` }} />
            <h2>{title && title}</h2>
            <p>{text && text}</p>
        </div>
    );
};

export default Card;
