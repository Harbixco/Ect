import { BadgeCheck } from "lucide-react";
import { success } from "../../assets";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    closeModal();
    navigate("/dashboard");
  };
  return (
    <div className="w-full py-3 md:py-6 ">
      <div className="mx-auto flex w-full flex-col items-center justify-between md:flex-row">
        <img src={success} alt="" className="w-[60%]" />
        <div className="mt-4 flex flex-col items-center justify-center md:mt-0">
          <h3 className="mb-6 font-semibold">Payment Successfully</h3>

          <BadgeCheck size={40} className="text-primary" />
          <button
            className="mt-4 rounded-xl bg-secondary px-2 py-[6px] text-sm text-white md:text-base"
            onClick={handleClick}
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
