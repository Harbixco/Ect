import NavBar from "./Navbar";
import { Button } from "../common";

export default function GenNavbar() {
  return (
    <NavBar
      NavList={[
        { nav: "home", link: "/" },
        { nav: "courses", link: "/course" },
        { nav: "portfolio", link: "/portfolio/:id" },
        { nav: "about", link: "/about" },
        { nav: "contact", link: "/contact" },
        {
          nav: "more",
          link: "#",
          dropdown: [
            { nav: "Job Offers", link: "/joboffer" },
            { nav: "Blogs", link: "/blog" },
            { nav: "Faqs", link: "/faqs" },
            { nav: "Medias", link: "/media" },
          ],
        },
        // New mobile links
        // { nav: "blog", link: "/blog" },
        // { nav: "faq", link: "/faq" },
        // { nav: "terms", link: "/terms" },
        // { nav: "privacy", link: "/privacy" }
      ]}
      Buttons={
        <Button
          type="link"
          href="/getaquote"
          text="Get a Quote"
          category="primary"
        />
      }
    />
  );
}
