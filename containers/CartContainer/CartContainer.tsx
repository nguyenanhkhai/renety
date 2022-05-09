import Button from "components/Button/Button";
import CartItem from "components/CartItem/CartItem";
import Paper from "components/Paper/Paper";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  decrement,
  getAllCart,
  increment,
  remove,
} from "store/modules/Cart/action";
import { CartState } from "store/modules/Cart/reducer";
import { RootState } from "types/redux";

type CartContainerProps = {
  className?: string;
};

const CartContainer: React.FC<CartContainerProps> = (props) => {
  const dispatch = useAppDispatch();
  const { cart } = useSelector<RootState, CartState>((state) => state.cart);
  const fetchCart = useCallback(async () => {
    try {
      await dispatch(getAllCart(0)).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = (): number => {
    let subtotal = 0;
    for (let i: number = 0; i < cart.length; i++) {
      subtotal = subtotal + cart[i].quantity * cart[i].price;
    }
    return subtotal;
  };

  return (
    <>
      <Paper className="cart w-4/5 p-4">
        <h2 className="mb-4">
          {cart.length > 0
            ? `Shopping Cart (${cart.length})`
            : "No product in cart (0)."}
        </h2>

        {cart.length > 0 &&
          cart.map((product, index) => {
            return (
              <CartItem
                key={index}
                id={product.id}
                item={product.item}
                quantity={product.quantity}
                price={product.price}
                tangsoluong={async () => {
                  await dispatch(increment(product.id));
                }}
                giamsoluong={async () => {
                  await dispatch(decrement(product.id));
                }}
                xoasanpham={async () => {
                  await dispatch(remove(product.id));
                }}
              />
            );
          })}
      </Paper>
      {/* Subtotal */}
      <Paper className="cart__checkout w-1/5 p-4 h-[150px]">
        <h4>Subtotal: {total()} VND </h4>
        <Button
          type="button"
          className="overflow-hidden w-full mt-4 bg-primary text-white hover:bg-viking">
          Checkout
        </Button>
      </Paper>
    </>
  );
};

export default CartContainer;
