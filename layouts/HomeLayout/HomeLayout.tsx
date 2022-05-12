import AppHeader from "components/AppHeader/AppHeader";
import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";

type HomeLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
