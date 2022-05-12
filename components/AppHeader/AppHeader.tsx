import { NAVIGATIONS } from "common/navigations";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";
import { PAGES } from "data/data";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
type AppHeaderProps = {
  badgeContent?: number;
};

const AppHeader: React.FC<AppHeaderProps> = ({ badgeContent }) => {
  return (
    <div className="app-bar h-appbar bg-white fixed z-10 top-0 left-0 right-0 shadow-md ">
      <div className="app-header container  bg-white items-center justify-between flex h-appbar">
        <div className="header__logo p-3 xs:w-full sm:w-full md:w-auto lg:w-auto">
          <Link href={"/"}>
            {/* <h2 className="font-librecaslon">{process.env.NEXT_PUBLIC_BRAND}</h2> */}
            <h2 className="font-librecaslon">AUGUST16</h2>
          </Link>
        </div>
        <div className="app_header container header__search relative xs:w-full sm:w-full md:w-[30%] lg:w-[30%]">
          <Input
            placeholder="Search..."
            className="w-full p-2 border border-mercury text-xs rounded-sm outline-none "
          />
          <button className="absolute top-[7px] right-1 z-10 ">
            <MdOutlineSearch size={25} />
          </button>
        </div>
        <div className="header__options flex items-center xs:w-full sm:w-full md:w-auto lg:w-auto ">
          {NAVIGATIONS.map((page) => {
            return (
              <div
                key={page.id}
                className="header__options__item p-3 text-sm hover:text-steel">
                <Link href={page.path}>
                  <a>{page.title}</a>
                </Link>
              </div>
            );
          })}
          <div className="header__options__item text-sm hover:text-steel">
            <Badge badgeContent={badgeContent ? badgeContent : 0}>
              <Link href="/cart">
                <a>
                  <HiOutlineShoppingBag size={24} />
                </a>
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
