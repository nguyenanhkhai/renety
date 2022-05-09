import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
// read more https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlinputelement.html
// type InputProps = {
//   className?: string;
// } & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//  or
export type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={className} {...props} />;
};

export default Input;
