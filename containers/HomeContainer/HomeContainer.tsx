import AppContainer from "components/AppContainer/AppContainer";
import Carousel from "components/Carousel/Carousel";
import Showcase from "components/Showcase/Showcase";
import { DW_MENS } from "data/dw_men";

type HomeContainerProps = {
  className?: string;
};

const HomeContainer: React.VFC<HomeContainerProps> = (props) => {
  return (
    <>
      <AppContainer>
        <Carousel title="Sản phẩm nổi bật" data={DW_MENS.slice(0, 13)} />
        <Showcase title="Sản phẩm dành cho bạn" data={DW_MENS.slice(5, 20)} />
      </AppContainer>
    </>
  );
};

export default HomeContainer;
