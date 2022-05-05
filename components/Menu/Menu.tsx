type MenuProps = {
  className?: string;
  children: React.ReactNode;
};

const Menu: React.FC<MenuProps> = ({ children, className }) => {
  return <div className={"menu " + className}>{children}</div>;
};

export default Menu;
