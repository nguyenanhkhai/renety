type MenuItemProps = {
  className?: string;
  icon?: string;
  children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ children, className }) => {
  return <div className={"menu__item " + className}>{children}</div>;
};

export default MenuItem;
