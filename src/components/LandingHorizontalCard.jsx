const LandingHorizontalCard = ({ img, title, description, imgPosition }) => {
  let classNames = [];
  if (imgPosition === 'left') { classNames.push("flex-row") }
  if (imgPosition === 'right') { classNames.push("flex-row-reverse") }

  return (
    <div className={"flex gap-10 " + classNames.join(" ")}>
      <img className="flex flex-[2] w-full min-w-[250px] h-full min-h-[250px] rounded-3xl" src={img} />
      <div className="flex flex-[5] flex-col justify-center p-4">
        <h2 className='font-roboto text-left text-2xl lg:text-4xl font-bold text-white mb-3'>{title}</h2>
        <p className='font-roboto text-left text-lg lg:text-2xl text-[#D9BD8B]'>{description}</p>
      </div>
    </div>
  );
};

export default LandingHorizontalCard;