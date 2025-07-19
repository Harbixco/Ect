import { X } from "lucide-react";
import { useModal } from "../../../hooks/UseModal";
import LoginForm from "../authentication/Login";
import SignupForm from "../authentication/Signup";
import { PaymentSuccess } from "../../../pages";

export default function AuthenticationModal() {
  const { isModalOpen, modalType, closeModal } = useModal();
  if (!isModalOpen) return null;

  return (
    <section className="fixed z-50 flex h-screen w-full items-center justify-center bg-black/40 px-8 backdrop-blur-sm">
      <div className="relative z-50 mx-auto h-max w-full max-w-lg rounded-2xl bg-white  py-4 shadow">
        {modalType !== "paymentsuccess" && (
          <X
            className="absolute right-4 top-4 cursor-pointer"
            size={24}
            onClick={closeModal}
          />
        )}
        <div className="mx-auto max-w-md pt-4">
          {modalType === "login" && <LoginForm />}
          {modalType === "signup" && <SignupForm />}
          {modalType === "paymentsuccess" && (
            <PaymentSuccess closeModal={closeModal} />
          )}
        </div>
      </div>
    </section>
  );
}
