import "./Card.scss";

const Card = ({
    img,
    alt,
    title,
    text,
    webp256,
    webp384,
    webp512,
    png256,
    png384,
    png512,
}) => {
    return (
        <div className="card">
            <div className="image">
                <picture>
                    <source
                        type="image/webp"
                        srcSet={`${webp256} 256w, ${webp384} 384w, ${webp512} 512w`}
                    />
                    <source
                        type="image/png"
                        srcSet={`${png256} 256w, ${png384} 384w, ${png512} 512w`}
                    />
                    <img src={img} alt={alt} />
                </picture>
            </div>
            <h2>{title && title}</h2>
            <p>{text && text}</p>
        </div>
    );
};

export default Card;
