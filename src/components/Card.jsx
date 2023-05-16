import star from "../assets/star.png";

function Card(props) {
  // badge logic
  let badge;
  if (props.item.openSpots === 0) {
    badge = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badge = "ONLINE";
  }
  return (
    <div className="--card">
      {badge && <div className="--card-badge">{badge}</div>}

      <img src={`/images/${props.item.coverImg}`} className="--card-img"></img>
      <div className="--card-metrics">
        <img src={star} className="--card-star"></img>
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">• {props.item.location}</span>
      </div>
      <div className="--card-title">
        <p>{props.item.title}</p>
        <p className="--card-price">
          <strong>From ${props.item.price} /</strong> person
        </p>
      </div>
    </div>
  );
}
export default Card;
