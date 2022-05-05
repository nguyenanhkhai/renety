import AppHeader from "components/AppHeader/AppHeader";
import Footer from "components/Footer/Footer";
import Paper from "components/Paper/Paper";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
type CartPageProps = {
  className?: string;
};

const CartPage: React.VFC<CartPageProps> = (props) => {
  const [amounts, setAmounts] = useState<number>(1);

  function addAmount(amounts: number) {
    setAmounts(amounts + 1);
  }

  function subAmount(amounts: number) {
    if (amounts > 1) setAmounts(amounts - 1);
  }
  return (
    <>
      <AppHeader />
      <div className="mt-[80px]"></div>
      <main>
        <div className="cart__wrapper  container flex gap-4  ">
          <Paper className="cart w-4/5 p-4">
            {[1, 2, 3, 4, 5, 6].map((value) => {
              return (
                <div className="cart__item w-full flex gap-4 border-b-2 border-solid border-steel">
                  <div className="cart__item__media w-1/5 ">
                    <img
                      src="https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_AA360_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="cart__item__info p-4 w-4/5 leading-5">
                    <div className="cart__item__description mb-4 ">
                      Corsair K65 RGB MINI 60% Mechanical Gaming Keyboard
                      (Customizable Per-Key RGB Backlighting, CHERRY MX Speed
                      Mechanical Keyswitches, Detachable USB Type-C Cable,
                    </div>

                    <div className="cart__amount__control mb-4 border border-solid inline-table border-[#dddd] rounded-md font-bold">
                      <button
                        type="button"
                        className="bg-gray-600 px-4 py-2"
                        onClick={() => {
                          subAmount(amounts);
                        }}>
                        -
                      </button>
                      <input
                        type="text"
                        className="px-4 py-2 w-[40px] text-xs text-center border-x border-solid  border-[#dddd]"
                        value={amounts}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setAmounts(Number.parseInt(event.target.value));
                        }}
                      />
                      <button
                        type="button"
                        className="bg-gray-600 px-4 py-2"
                        onClick={() => {
                          addAmount(amounts);
                        }}>
                        +
                      </button>
                    </div>

                    <div className="cart__item__options">
                      <button>
                        <MdOutlineDelete size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Paper>

          <Paper className="cart__checkout w-1/5 p-4 h-[200px]">
            <h4>Subtotal: 2000</h4>
            <button type="button">Checkout</button>
          </Paper>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
