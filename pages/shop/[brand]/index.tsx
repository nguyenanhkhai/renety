import ShopContainer from "containers/ShopContainer/ShopContainer";
import ShopLayout from "layouts/ShopLayout/ShopLayout";
import { NextPage } from "next";

type ShopPageProps = {
  className?: string;
};

const ShopPage: NextPage = (props) => {
  return (
    <ShopLayout>
      <ShopContainer />
    </ShopLayout>
  );
};

export default ShopPage;
