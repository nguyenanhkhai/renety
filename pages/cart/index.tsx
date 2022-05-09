import CartContainer from "containers/CartContainer/CartContainer";
import CartLayout from "layouts/CartLayout/CartLayout";
import { NextPage } from "next";

type CartPageProps = {
  className?: string;
};

const CartPage: NextPage = (props) => {
  return (
    <CartLayout>
      <CartContainer />
    </CartLayout>
  );
};

export default CartPage;
