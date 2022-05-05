import AppHeader from "components/AppHeader/AppHeader";
import Banner from "components/Banner/Banner";
import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import Showcase from "components/Showcase/Showcase";
import AppContainer from "components/AppContainer/AppContainer";
type HomeLayoutProps = {
  className?: string;
};

const HomeLayout: React.VFC<HomeLayoutProps> = () => {
  return (
    <>
      <AppHeader />
      <Banner />
      <main>
        <AppContainer>
          <Carousel title="Sản phẩm nổi bật" />
          <Showcase title="Sản phẩm dành cho bạn" />
        </AppContainer>
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
