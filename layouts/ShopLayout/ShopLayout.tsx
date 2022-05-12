import AppContainer from "components/AppContainer/AppContainer";
import AppHeader from "components/AppHeader/AppHeader";
import Footer from "components/Footer/Footer";
import React from "react";

type ShopLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className="mt-[100px]">
        <AppContainer>{children}</AppContainer>
      </main>
      <Footer />
    </>
  );
};

export default ShopLayout;
