// import { NavLink } from "react-router-dom";
// import { Button, Logo, Menu } from "../common";
// import { Search } from "lucide-react";
import { useModal } from "../../hooks/UseModal";
import { Button } from "../common";

import NavBar from "./Navbar";

export default function CourseNavbar() {
  const { openModal } = useModal();

  return (
    <NavBar
      Buttons={
        <>
          <Button
            type="function"
            text="log in"
            category="secondary"
            onClick={() => openModal("login")}
          />
          <Button
            type="function"
            text="sign in"
            category="primary"
            onClick={() => openModal("signup")}
          />
        </>
      }
      NavList={[
        { nav: "explore courses", link: "/course/courses" },
        { nav: "expansion premium", link: "/course/premium" },
      ]}
    />
  );
}
