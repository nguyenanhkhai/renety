import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { MdOutlineDelete } from "react-icons/md";

export type CartItemProps = {
  className?: string;
  id: number;
  item: string;
  price: number;
  quantity: number;
  tangsoluong?: () => void;
  giamsoluong?: () => void;
  xoasanpham?: () => void;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  item,
  price,
  quantity,
  tangsoluong = () => {},
  xoasanpham = () => {},
  giamsoluong = () => {},
}) => {
  return (
    <div className="cart__item w-full flex gap-4 border-b-2 border-solid border-steel">
      <div className="cart__item__media w-1/5 ">
        <img
          src="https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_AA360_.jpg"
          alt=""
        />
      </div>
      <div className="cart__item__info p-4 w-4/5 leading-5">
        <div className="cart__item__description mb-4 ">{item}</div>

        <div className="cart__amount__control mb-4 border border-solid inline-table border-[#dddd] rounded-md font-bold">
          <Button
            type="button"
            className="bg-gray-600 px-4 py-2"
            onClick={() => {
              giamsoluong();
            }}>
            -
          </Button>
          <Input
            className="px-4 py-2 w-[50px] text-xs text-center border-x border-solid  border-[#dddd]"
            value={quantity.toString()}
            disabled
          />
          <Button
            type="button"
            className="bg-gray-600 px-4 py-2"
            onClick={() => {
              tangsoluong();
            }}>
            +
          </Button>
        </div>

        <div className="cart__item__options">
          <Button
            onClick={() => {
              xoasanpham();
            }}>
            <MdOutlineDelete size={25} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
