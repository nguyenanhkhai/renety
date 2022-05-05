import ProductLayout from "layouts/ProductLayout/ProductLayout";
import { NextPage } from "next";

type ProductPageProps = {
  className?: string;
};

const ProductPage: NextPage = (props) => {
  return <ProductLayout />;
};

export default ProductPage;
