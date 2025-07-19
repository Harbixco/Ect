import { motion } from "framer-motion";
import { Logo } from "../../components/common";
import { X } from "lucide-react";
import { useMobileMenu } from "../../hooks/UseMobileContext";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface NavLinksProps {
  NavLinks: { nav: string; link: string }[];
  Buttons: ReactNode;
}

export default function MobileMenuContainer({
  NavLinks,
  Buttons,
}: NavLinksProps) {
  const { open, toggleMenu } = useMobileMenu();
  // const { openModal } = useModal();

  return (
    <motion.div
      initial={{ display: "none" }}
      animate={{ display: open ? "block" : "none" }}
      className={`fixed left-0 top-0 z-50 h-screen w-full lg:hidden`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 backdrop-blur-md"
        onClick={() => toggleMenu(false)}
      ></motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-50 h-full w-5/6 bg-white"
      >
        <div className="flex items-center justify-between border-b p-4">
          <Logo className="block w-28" />
          <X onClick={() => toggleMenu(false)} className="stroke-primary" />
        </div>
        <div className="flex h-full flex-col justify-between pb-4">
          <div className="flex h-2/3 flex-col items-start gap-4 p-4 ">
            {NavLinks?.map(({ nav, link }, index) => (
              <NavLink
                to={link}
                key={index}
                className="font-medium capitalize text-primary/90"
                onClick={() => toggleMenu(false)}
              >
                {nav}
              </NavLink>
            ))}
          </div>

          <div className="flex h-1/3 flex-col items-center gap-4 border-t p-4 *:w-full">
            {Buttons}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
