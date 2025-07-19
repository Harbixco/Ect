import { Outlet } from "react-router-dom";
import { GenNavbar, Footer } from "../../components";
import { MobileMenuContainer } from "../CoursePages";
import { Button } from "../../components/common";

// import LandingPage from "./LandingPage";

const GeneralLayout = () => {
  return (
    <main className="relative">
      <MobileMenuContainer
        Buttons={
          <Button
            type="function"
            text="Get a quote"
            category="primary"
            onClick={() => null}
          />
        }
        NavLinks={[
          { nav: "home", link: "/" },
          { nav: "about", link: "/about" },
          { nav: "portfolio", link: "/portfolio" },
          { nav: "contact", link: "/contact" },
          { nav: "courses", link: "/course" },
        ]}
      />
      <GenNavbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default GeneralLayout;
