import ProgressBar from "./ProgressBar";

const AdminProjectCard = ({ avatar, title, value }) => {
  return (
    <div className="mx-auto w-[98%] rounded-xl border border-[#dadada] py-3 md:w-full">
      <div className="mx-auto w-[92%] ">
        <div className="w-full">
          <img src={avatar} alt={`${title}`} className="w-full rounded-xl" />
        </div>
        <h3 className="mb-3 mt-2 text-lg font-semibold md:text-xl">{title}</h3>
        <ProgressBar value={value} />
      </div>
    </div>
  );
};

export default AdminProjectCard;
