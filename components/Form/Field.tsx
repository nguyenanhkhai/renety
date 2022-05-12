import React from "react";

type FieldProps = { className?: string; children: React.ReactNode };
const Field: React.FC<FieldProps> = ({ children, className }) => {
  return <div className={"form__field " + className}>{children}</div>;
};
export default Field;
