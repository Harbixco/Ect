import { Outlet } from "react-router-dom";
import { CourseNavbar, Footer, Promo } from "../../components";
import { AuthenticationModal } from "../../components/CourseComponents";
import MobileMenuContainer from "../../components/common/MobileNav";
import { Button } from "../../components/common";
import { useModal } from "../../hooks/UseModal";
import { useMobileMenu } from "../../hooks/UseMobileContext";

const CourseLayout = () => {
  const { openModal } = useModal();
  const { toggleMenu } = useMobileMenu();
  return (
    <main className="relative">
      <AuthenticationModal />
      <MobileMenuContainer
        Buttons={
          <>
            <Button
              type="function"
              text="log in"
              category="secondary"
              onClick={() => {
                openModal("login");
                toggleMenu(false);
              }}
            />
            <Button
              type="function"
              text="sign up"
              category="primary"
              onClick={() => {
                openModal("signup");
                toggleMenu(false);
              }}
            />
          </>
        }
        NavLinks={[
          { nav: "explore courses", link: "/course/courses" },
          { nav: "expansion premium", link: "/course/premium" },
        ]}
      />

      <Promo />
      <CourseNavbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default CourseLayout;
