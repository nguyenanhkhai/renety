import Card from "components/Card/Card";
import Paper from "components/Paper/Paper";

import { settingReactSlick } from "configs/reactSlickConfigs";

import Slider from "react-slick";
import { WatchProps } from "types/common";

type CarouselProps = {
  className?: string;
  title?: string;
  data?: WatchProps[];
};

const Carousel: React.VFC<CarouselProps> = ({
  title = "Carousel",
  data = [],
}) => {
  return (
    <Paper className="rounded-md mt-10 ">
      <div className="carousel">
        <div className="carousel-title text-center font-librecaslon py-5 ">
          <h3>{title && title}</h3>
        </div>
        <div className="carousel-list  ">
          <Slider {...settingReactSlick}>
            {data
              ? data.map((watch) => {
                  return (
                    <Card key={watch.barcode} className="mr-4" {...watch} />
                  );
                })
              : "Không thể render."}
          </Slider>
        </div>
      </div>
    </Paper>
  );
};

export default Carousel;
