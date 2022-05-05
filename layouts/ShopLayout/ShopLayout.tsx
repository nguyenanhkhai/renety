import AppContainer from "components/AppContainer/AppContainer";
import AppHeader from "components/AppHeader/AppHeader";
import Footer from "components/Footer/Footer";
import Showcase from "components/Showcase/Showcase";

type ShopLayoutProps = {
  className?: string;
};

const ShopLayout: React.VFC<ShopLayoutProps> = (props) => {
  return (
    <>
      <AppHeader />
      <main>
        <AppContainer>
          <Showcase className="mt-[100px]" title="MEN'S WATCHES" />
        </AppContainer>
      </main>
      <Footer />
    </>
  );
};

export default ShopLayout;
