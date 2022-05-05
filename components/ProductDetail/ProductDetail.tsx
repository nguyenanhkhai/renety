import { useState } from "react";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

type ProductDetailProps = { className?: string };

/**
 * Should research props
 */

const ProductDetail: React.FC<ProductDetailProps> = ({ className }) => {
  const [amounts, setAmounts] = useState<number>(1);

  function addAmount(amounts: number) {
    setAmounts(amounts + 1);
  }

  function subAmount(amounts: number) {
    if (amounts > 1) setAmounts(amounts - 1);
  }

  return (
    <div
      className={
        "product__detail sm:w-full  m-auto flex flex-wrap overflow-hidden shadow-md bg-white rounded-md  " +
        className
      }>
      <div className="product__detail__media w-full overflow-hidden p-4 sm:w-full md:w-1/2 lg:w-1/2">
        <img
          className="rounded-md"
          src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/vietnam--luciano-mortula-shutterstock-768x512.jpg"
          alt=""
        />
      </div>
      <div className="product__detail__info w-full p-16 sm:w-full md:w-1/2">
        <div className="product__info__title  mb-2 text-3xl font-librecaslon">
          The Catcher in the Rye
        </div>
        <div className="product__info__rating mb-4 flex">
          <MdOutlineStar color="#ffff00" size={20} />
          <MdOutlineStar color="#ffff00" size={20} />
          <MdOutlineStar color="#ffff00" size={20} />
          <MdOutlineStar color="#ffff00" size={20} />
          <MdOutlineStarHalf color="#ffff00" size={20} />
        </div>
        <div className="product__info__description text-steel mb-4 text-justify font-roboto leading-5">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </div>
        <div className="product__info_price mb-4 text-3xl">$58.00</div>

        {/* quantities control */}
        <div className="product__info__amount__control mb-4 border border-solid inline-table border-[#dddd] rounded-md font-bold">
          <button
            type="button"
            className="w-[50px] bg-gray-600 p-2"
            onClick={() => {
              subAmount(amounts);
            }}>
            -
          </button>
          <input
            type="text"
            className="w-[50px] p-2 text-center border-x border-solid  border-[#dddd]"
            value={amounts}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAmounts(Number.parseInt(event.target.value));
            }}
          />
          <button
            type="button"
            className="w-[50px] bg-gray-600 p-2"
            onClick={() => {
              addAmount(amounts);
            }}>
            +
          </button>
        </div>

        <div className="product__info__button mb-4 flex justify-center">
          <button className="w-full rounded-md border-slate-500 bg-[#0a66c2] p-3 text-white hover:bg-[#34aae0]">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
