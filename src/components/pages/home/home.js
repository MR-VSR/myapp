import Carousel from './carousel';
import Categories from './categories';
import Card from './card';
import BottomCard from './bottomCard';


function Home() {

  return (
    <div className="HomeContainer">
      <Carousel/>
      <Categories/>
      <Card />
      <BottomCard />
    </div>
  );
}

export default Home;