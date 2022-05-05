import Menu from "components/Menu/Menu";
import MenuItem from "components/Menu/MenuItem";
import { SUPPORT_CLIENT_DATA } from "data/data";
import Link from "next/link";

type FooterProps = {
  className?: string;
};

const Footer: React.VFC<FooterProps> = (props) => {
  return (
    <div className="footer mt-10">
      <div className="footer__container container grid grid-cols-4">
        <div className="footer__item__block">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
          <Menu>
            {SUPPORT_CLIENT_DATA.map((value, index) => {
              return (
                <MenuItem key={index} className="py-1 text-sm ">
                  <Link href={value.path}>{value.title}</Link>
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <div className="footer__item__block">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
        <div className="footer__item__block">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
        <div className="footer__item__block">
          <h4 className="mb-1"> Hỗ trợ khách hàng </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
