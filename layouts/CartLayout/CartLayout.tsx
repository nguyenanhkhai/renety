import AppHeader from "components/AppHeader/AppHeader";
import Footer from "components/Footer/Footer";
import CartContainer from "containers/CartContainer/CartContainer";

type CartLayoutProps = {
  className?: string;
  children: React.ReactNode
};

const CartLayout: React.VFC<CartLayoutProps> = ({children}) => {
  return (
    <>
      <AppHeader badgeContent={5} />
      <div className="mt-[80px]"></div>
      <main>
        <div className="cart__wrapper container flex gap-4 ">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartLayout;
