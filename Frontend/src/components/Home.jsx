import slide01 from '../static/slide01.jpg';
import slide02 from '../static/slide02.jpg';
import slide03 from '../static/slide03.jpg';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css'; // Make sure to import your custom CSS file

const Home = () => {
  return (
    <div className="row">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Add the custom class here
            src={slide01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Add the custom class here
            src={slide03}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Add the custom class here
            src={slide02}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
