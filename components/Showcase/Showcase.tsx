import Card from "components/Card/Card";
import Paper from "components/Paper/Paper";
import { WatchProps } from "types/common";

type ShowcaseProps = {
  className?: string;
  title?: string;
  data: Array<WatchProps>;
};

const Showcase: React.FC<ShowcaseProps> = ({
  title = "Showcase",
  className,
  data,
}) => {
  return (
    <div className={"showcase mt-10 " + className}>
      <div className="showcase__title text-center font-librecaslon py-5">
        <h3>{title && title}</h3>
      </div>
      <div className="showcase__content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {data.length > 0
          ? data.map((watch, index) => {
              return <Card key={watch.barcode} {...watch} />;
            })
          : "Không có sản phẩm hiển thị"}
      </div>
    </div>
  );
};

export default Showcase;
