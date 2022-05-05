import Badge from "components/Badge/Badge";
import { CART_SAMPLE, PAGES } from "data/data";
import Link from "next/link";
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";

type AppHeaderProps = {};

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <div className="app-bar h-appbar bg-white fixed z-10 top-0 left-0 right-0 shadow-md ">
      <div className="app-header container flex h-full bg-white items-center justify-between ">
        <div className="header__logo p-3">
          <Link href={"/"}>
            {/* <h2 className="font-librecaslon">{process.env.NEXT_PUBLIC_BRAND}</h2> */}
            <h2 className="font-librecaslon">AUGUST16</h2>
          </Link>
        </div>
        <div className="header__search w-1/4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-steel text-13 rounded-sm outline-none"
          />
          <button className="absolute top-[7px] right-1 z-10 ">
            <MdOutlineSearch size={25} />
          </button>
        </div>
        <div className="header__options flex items-center ">
          {PAGES.map((page) => {
            return (
              <div
                key={page.id}
                className="header__options__item p-3 text-13 hover:text-steel">
                <Link href={page.path}>{page.item}</Link>
              </div>
            );
          })}
          <div className="header__options__item text-13 hover:text-steel">
            <Badge badgeContent={CART_SAMPLE.length}>
              <Link href="/cart">
                <MdOutlineShoppingCart size={25} />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
