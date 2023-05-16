import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";
import Card from "./components/Card";
import testData from "../data";

function App() {
  const cards = testData.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <PhotoGrid />
      <div className="--cards-container">{cards}</div>
    </>
  );
}

export default App;
