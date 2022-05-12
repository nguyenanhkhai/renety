import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
// read more https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlinputelement.html
// https://stackoverflow.com/questions/59554049/react-typescript-how-to-use-useref-as-prop
// type InputProps = {
//   className?: string;
// } & DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//  or
export type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={className} {...rest} />;
};

export default Input;
// https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript
