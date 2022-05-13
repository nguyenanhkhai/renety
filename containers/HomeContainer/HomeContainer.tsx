import AppContainer from "components/AppContainer/AppContainer";
import Carousel from "components/Carousel/Carousel";
import Showcase from "components/Showcase/Showcase";
import { WatchProduct } from "data/watches";

type HomeContainerProps = {
  className?: string;
};

const HomeContainer: React.VFC<HomeContainerProps> = (props) => {
  return (
    <>
      <AppContainer>
        <Carousel title="Sản phẩm nổi bật" data={WatchProduct.splice(0, 12)} />
        <Showcase
          title="Sản phẩm dành cho bạn"
          data={WatchProduct.slice(5, 20)}
        />
      </AppContainer>
    </>
  );
};

export default HomeContainer;
