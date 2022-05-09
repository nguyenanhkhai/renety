import { Menu } from "components/Menu";
import { SUPPORT_CLIENT_DATA } from "data/data";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

const Footer: React.VFC<FooterProps> = (props) => {
  return (
    <div className="footer mt-10">
      <div className="footer__container container grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4 ">
        <div className="footer__item__block text-center mb-4 xs:text-center sm:text-center md:text-left lg:text-left">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
          <Menu.MenuList>
            {SUPPORT_CLIENT_DATA.map((value, index) => {
              return (
                <Menu.MenuItem key={index} className="py-1 text-sm ">
                  <Link href={value.path}>{value.title}</Link>
                </Menu.MenuItem>
              );
            })}
          </Menu.MenuList>
        </div>
        <div className="footer__item__block text-center mb-4 xs:text-center sm:text-center md:text-left lg:text-left">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
        <div className="footer__item__block text-center mb-4 xs:text-center sm:text-center md:text-left lg:text-left">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
        <div className="footer__item__block text-center mb-4 xs:text-center sm:text-center md:text-left lg:text-left">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
