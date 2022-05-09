type MenuListProps = {
  className?: string;
  children: React.ReactNode;
};

const MenuList: React.FC<MenuListProps> = ({ children, className }) => {
  return <div className={"menu " + className}>{children}</div>;
};

export default MenuList;
