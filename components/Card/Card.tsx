import Image from "next/image";
import { WatchProps } from "types/common";

export type CardProps = {
  className?: string;
} & WatchProps;

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={
        "card h-[400px] overflow-hidden rounded-md shadow-md hover:shadow-lg hover:shadow-slate-600 border border-solid border-mercury " +
        props.className
      }>
      <div className="card__media h-[250px] w-full p-2">
        {props.images ? (
          <img src={props.images[0]} alt={props.title} />
        ) : (
          "Loading"
        )}
      </div>
      <div className="card__body px-2 py-4">
        <div className="card__body__item card__title mb-2 text-sm h-[40px]">
          {props.title}
        </div>
        <div className="card__body__item card__text mb-2 text-sm">
          {props.barcode}
        </div>
        <div className="card__body__item card__price mb-2 text-sm">fasd</div>
      </div>
    </div>
  );
};

export default Card;
