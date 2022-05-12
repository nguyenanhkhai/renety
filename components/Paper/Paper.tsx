type PaperProps = {
  className?: string;
  children: React.ReactNode;
};

const Paper: React.FC<PaperProps> = ({ children, className }) => {
  return (
    <div className={"paper w-full shadow-md bg-white rounded-md " + className}>
      {children}
    </div>
  );
};

export default Paper;
