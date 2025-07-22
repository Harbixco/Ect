type ClientlogoProps = { img: string };

const Clientlogo = ({ img }: ClientlogoProps) => {
  return (
    <div className="">
      <img src={img} alt="" className="size-20 md:size-24" />
    </div>
  );
};

export default Clientlogo;
