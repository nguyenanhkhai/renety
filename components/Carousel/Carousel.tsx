import Card from "components/Card/Card";
import Paper from "components/Paper/Paper";

import { settingReactSlick } from "configs/reactSlickConfigs";

import Slider from "react-slick";

type CarouselProps = {
  className?: string;
  title?: string;
};

const Carousel: React.VFC<CarouselProps> = ({ title = "Carousel" }) => {
  return (
    <Paper className="rounded-md mt-10 ">
      <div className="carousel">
        <div className="carousel-title text-center font-librecaslon py-5 ">
          <h3>{title && title}</h3>
        </div>
        <div className="carousel-list  ">
          <Slider {...settingReactSlick}>
            {[1, 2, 3, 4, 5, 6, 7].map((value) => {
              return <Card key={value} className="mr-4" />;
            })}
          </Slider>
        </div>
      </div>
    </Paper>
  );
};

export default Carousel;
