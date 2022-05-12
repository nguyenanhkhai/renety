import Image from "next/image";

type BannerProps = {
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <div className={"banner__wrapper mt-[70px] relative " + className}>
      <div className="banner__media w-full sm:h-[250px] md:h-[500px] lg:h-[500px]">
        <img
          src="https://d1rkccsb0jf1bk.cloudfront.net/assets/2022/new-in/Seiko_Desktop.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
