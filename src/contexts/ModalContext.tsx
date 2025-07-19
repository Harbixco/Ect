import { createContext, useState, ReactNode, useEffect } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  modalType: "login" | "signup" | "paymentsuccess";
  openModal: (type: "login" | "signup" | "paymentsuccess") => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "signup" | "paymentsuccess">("login");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = (type: "login" | "signup" | "paymentsuccess") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
