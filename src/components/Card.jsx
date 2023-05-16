import star from "../assets/star.png";

function Card(props) {
  let badge;
  if (props.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.location === "Online") {
    badge = "ONLINE";
  }
  return (
    <div className="--card">
      {badge && <div className="--card-badge">{badge}</div>}

      <img src={`/images/${props.img}`} className="--card-img"></img>
      <div className="--card-metrics">
        <img src={star} className="--card-star"></img>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">• {props.location}</span>
      </div>
      <div className="--card-title">
        <p>{props.title}</p>
        <p className="--card-price">
          <strong>From ${props.price} /</strong> person
        </p>
      </div>
    </div>
  );
}
export default Card;
