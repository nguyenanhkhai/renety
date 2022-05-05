import AppContainer from "components/AppContainer/AppContainer";
import AppHeader from "components/AppHeader/AppHeader";
import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import ProductDetail from "components/ProductDetail/ProductDetail";
import Showcase from "components/Showcase/Showcase";

type ProductLayoutProps = {
  className?: string;
};

const ProductLayout: React.VFC<ProductLayoutProps> = (props) => {
  return (
    <>
      <AppHeader />
      <main>
        <AppContainer>
          <ProductDetail className="mt-[100px]" />
          <Carousel title="Sản phẩm tương tự" />
        </AppContainer>
      </main>
      <Footer />
    </>
  );
};

export default ProductLayout;
