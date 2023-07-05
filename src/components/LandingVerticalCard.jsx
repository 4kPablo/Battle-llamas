const LandingVerticalCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-start gap-4 w-full min-w-[100px] max-w-xs">
      <img className="w-full rounded-3xl" src={img} />
      <div className="flex flex-col justify-center p-3">
        <h2 className='font-roboto text-2xl lg:text-3xl font-bold text-white mb-3'>{title}</h2>
        <p className='font-roboto text-lg lg:text-xl text-[#D9BD8B]'>{description}</p>
      </div>
    </div>
  );
};

export default LandingVerticalCard;