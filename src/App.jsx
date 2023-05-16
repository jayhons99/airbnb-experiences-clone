import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";
import Card from "./components/Card";
import testData from "../data";

function App() {
  const cards = testData.map((item) => {
    return <Card key={item.id} item={item} />;
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
