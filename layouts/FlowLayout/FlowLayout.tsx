import AppHeader from "components/AppHeader/AppHeader";
import Link from "next/link";

type FlowLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const FlowLayout: React.VFC<FlowLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>
        <div className="container relative mt-[100px] flex justify-center ">
          {children}
        </div>
      </main>
    </>
  );
};

export default FlowLayout;
