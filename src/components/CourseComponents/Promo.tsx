import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <div className="flex w-full items-center justify-center bg-[#E8EAEE] px-2 py-4">
      <p className="text-wrap text-center text-xs md:text-sm">
        Ready to get with the times?
        <Link to="/course" className="ml-2 font-medium underline">
          Get the skills with Expansion Business
        </Link>
      </p>
    </div>
  );
}
