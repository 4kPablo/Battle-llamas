import useWindowDimensions from "../../windowDimensions";

const LandingVerticalCard = ({ img, title, description }) => {
  const { height, width } = useWindowDimensions();

  if (width > 640) {
    return (
      <div className="flex flex-col flex-1 items-center justify-start gap-4 w-full min-w-[100px] max-w-xs">
        <img className="w-full rounded-3xl" src={img} />
        <div className="flex flex-col justify-center p-3">
          <h2 className=" text-2xl lg:text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className=" text-lg lg:text-xl text-[#D9BD8B]">{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"flex flex-col gap-1 md:gap-10"}>
        <img
          className="flex mx-auto max-h-[400px] w-full h-full object-cover rounded-xl md:rounded-3xl"
          src={img}
        />
        <h2 className=" text-2xl font-bold text-white my-3">{title}</h2>
        <p className=" text-lg text-[#D9BD8B]">{description}</p>
      </div>
    );
  }
};

export default LandingVerticalCard;
