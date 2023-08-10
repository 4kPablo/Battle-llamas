import useWindowDimensions from '../../windowDimensions'

const LandingHorizontalCard = ({ img, title, description, imgPosition }) => {
  const { height, width } = useWindowDimensions();
  const classNames = [];

  if (imgPosition === 'left') { classNames.push("flex-row") }
  if (imgPosition === 'right') { classNames.push("flex-row-reverse") }

  if (width > 640) {

    // Secciones de info grandes
    return (
      <div className={"flex gap-1 md:gap-10 items-center " + classNames.join(" ")}>
        <img className="flex flex-[2] w-full h-full object-cover rounded-xl md:rounded-3xl" src={img} />
        <div className="flex flex-[5] flex-col justify-center p-4">
          <h2 className='font-roboto text-left text-2xl lg:text-4xl font-bold text-white mb-3'>{title}</h2>
          <p className='font-roboto text-left text-lg lg:text-2xl text-[#D9BD8B]'>{description}</p>
        </div>
      </div>
    );


  } else {

    // Secciones de info pequeñas
    return (
      <div className={"flex flex-col gap-1 md:gap-10"}>
        <img className="flex mx-auto max-h-[400px] w-full h-full object-cover rounded-xl md:rounded-3xl" src={img} />
        <h2 className='font-roboto text-2xl font-bold text-white my-3'>{title}</h2>
        <p className='font-roboto text-lg text-[#D9BD8B]'>{description}</p>
      </div>
    );
  }
};

export default LandingHorizontalCard;