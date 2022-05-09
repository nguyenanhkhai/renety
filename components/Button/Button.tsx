import { ButtonHTMLAttributes } from "react";

// export type ButtonProps = {
//   loading?: boolean;
//   className?: string;
// } & DetailedHTMLProps<
//   ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loadding?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={"py-3 rounded-md " + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
