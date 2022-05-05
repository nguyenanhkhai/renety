type BannerProps = {
  className?: string;
};

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <div className={"banner__wrapper mt-[70px] relative " + className}>
      <div className="banner__media w-full sm:h-[250px] md:h-[650px] lg:h-[650px]">
        <img
          src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
