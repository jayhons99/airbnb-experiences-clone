import star from "../assets/star.png";

function Card(props) {
  return (
    <div className="--card">
      <img src={`/src/assets/${props.img}`} className="--card-img"></img>
      <div className="--card-metrics">
        <img src={star} className="--card-star"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">• {props.country}</span>
      </div>
      <div className="--card-title">
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price} /</strong> person
        </p>
      </div>
    </div>
  );
}
export default Card;
