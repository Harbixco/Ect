const ProgressBar = ({ value }) => {
  return (
    <div className="relative h-2 w-full rounded-full bg-white md:h-2.5">
      <div
        className="relative h-2 rounded-full bg-secondary md:h-2.5"
        style={{ width: `${value}%` }}
      >
        <span
          className="absolute right-[6px] translate-x-1/2 text-[11px] font-semibold md:right-1 md:text-sm"
          style={{ top: "-1.2rem" }}
        >
          {value}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
