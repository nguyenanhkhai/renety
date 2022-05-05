type CardProps = {
  className?: string;
};

const Card: React.VFC<CardProps> = ({ className }) => {
  return (
    <div
      className={
        "card h-[300px] overflow-hidden rounded-md shadow-md hover:shadow-lg hover:shadow-slate-600 " +
        className
      }>
      <div className="card__media">
        <img
          className="h-full w-full"
          src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/vietnam--luciano-mortula-shutterstock-768x512.jpg"
          alt=""
        />
      </div>
      <div className="card__body px-2 py-4">
        <div className="card__body__item card__title mb-2">Vietnam</div>
        <div className="card__body__item card__text mb-2">I love Vietnam</div>
        <div className="card__body__item card__price mb-2">$5</div>
      </div>
    </div>
  );
};

export default Card;
