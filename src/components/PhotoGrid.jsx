import grid from "../assets/photo-grid.png";

function PhotoGrid() {
  return (
    <div className="--photoGrid">
      <img src={grid} className="--photoGrid-image"></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
export default PhotoGrid;
