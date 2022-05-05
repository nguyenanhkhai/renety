import ShopLayout from "layouts/ShopLayout/ShopLayout";
import { NextPage } from "next";

type ShopPageProps = {
  className?: string;
};

const ShopPage: NextPage = (props) => {
  return <ShopLayout />;
};

export default ShopPage;
