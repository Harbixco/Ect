import { useContext } from "react";
import { MobileNavContext } from "../contexts/MobileNavContext";

export const useMobileMenu = () => {
  const context = useContext(MobileNavContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }

  return context;
};
