import { createContext, ReactNode, useEffect, useState } from "react";

interface MobileNavContextType {
  open: boolean;
  toggleMenu: (open: boolean) => void;
}

const defaultContextValue: MobileNavContextType = {
  open: false,
  toggleMenu: () => {},
};

export const MobileNavContext =
  createContext<MobileNavContextType>(defaultContextValue);

export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const toggleMenu = (param: boolean) => {
    setOpen(param);
  };

  return (
    <MobileNavContext.Provider value={{ open, toggleMenu }}>
      {children}
    </MobileNavContext.Provider>
  );
};
