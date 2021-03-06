import Paper from "components/Paper/Paper";
import Showcase from "components/Showcase/Showcase";
import { ABOUT } from "data/about";
import { WatchProduct } from "data/watches";

import Link from "next/link";
import { useRouter } from "next/router";
import { WatchProps } from "types/common";

type ShopContainerProps = {
  className?: string;
};

const ShopContainer: React.FC<ShopContainerProps> = (props) => {
  const router = useRouter();
  const brand = router.query.brand as string;

  function getFakeData(brand_: string) {
    for (let i = 0; i < ABOUT.length; i++) {
      if (brand_ == ABOUT[i].brand) {
        return {
          imgae: ABOUT[i].image,
          content: ABOUT[i].content,
        };
      }
    }
  }

  function handleShowcaseTitle(brand_: string): string {
    return brand_.replace("-", " ").toUpperCase();
  }

  return (
    <>
      <Paper className="p-6">
        <img src={getFakeData(brand)?.imgae} alt="" />
        <p className="mt-4 leading-6 text-justify">
          {getFakeData(brand)?.content}
        </p>
      </Paper>

      <div className="flex gap-6 mt-6">
        <Paper className="text-center p-6 hover:bg-steel hover:text-white">
          <Link href="/">
            <a>
              <h1>FOR HIM</h1>
            </a>
          </Link>
        </Paper>
        <Paper className="text-center p-6 hover:bg-steel hover:text-white">
          <Link href="/">
            <a>
              <h1>FOR HER</h1>
            </a>
          </Link>
        </Paper>
      </div>
      <Showcase
        title={handleShowcaseTitle(brand)}
        data={WatchProduct.slice(0, 10)}
      />
    </>
  );
};

export default ShopContainer;
