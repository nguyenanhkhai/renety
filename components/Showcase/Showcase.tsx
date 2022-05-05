import Card from "components/Card/Card";
import Paper from "components/Paper/Paper";

type ShowcaseProps = {
  className?: string;
  title?: string;
};

const Showcase: React.VFC<ShowcaseProps> = ({
  title = "Showcase",
  className,
}) => {
  return (
    <Paper>
      <div className={"showcase mt-10 " + className}>
        <div className="showcase__title text-center font-librecaslon py-5">
          <h3>{title && title}</h3>
        </div>
        <div className="showcase__content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => {
            return <Card key={value} />;
          })}
        </div>
      </div>
    </Paper>
  );
};

export default Showcase;
