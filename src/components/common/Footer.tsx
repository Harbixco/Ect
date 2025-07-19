import { Link } from "react-router-dom";
import { contact, quickLinks, services } from "../../DummyData/CourseData";


export default function Footer() {
  return (
    <footer className="bg-primary p-4 md:p-8">
      <div className="text-white">
        <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between">
          <FooterLinks title="contact us" links={contact} activeLink={false} />
          <FooterLinks
            title="our services"
            links={services}
            activeLink={false}
          />
          <FooterLinks
            title="quick links"
            links={quickLinks}
            activeLink={true}
          />

          <FooterLinks
            title="follow us"
            activeLink={false}
            isIcon={true}
            links={[
              "/icons/facebook.svg",
              "/icons/linkedin.svg",
              "/icons/twitter.svg",
              "/icons/tiktok.svg",
            ]}
          />
        </div>
        <div className="grid justify-items-center">
          <div className="mt-4 flex flex-col gap-2 text-xs md:mt-10 md:flex-row md:gap-8">
            <p>
              @{new Date().getFullYear()} Expansion Cyber Technologies. All
              Rights Reserved
            </p>

            <div className="">
              <Link to={"/"} className="mr-4 md:mr-8">
                Terms and Condition
              </Link>
              <Link to={"/privacypolicy"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinksProps {
  title: string;
  links: string[];
  activeLink: boolean;
  isIcon?: boolean;
}

function FooterLinks({ title, links, activeLink, isIcon }: FooterLinksProps) {
  const socialLink = [
    "https://www.facebook.com/expansioncybertech/",
    "https://www.linkedin.com/company/expansioncybertech/",
    "https://twitter.com/expansiontech",
    "https://www.tiktok.com/@expansioncybertech?_t=8ooa4QgBs0c&_r=1",
  ];
  return (
    <div className="flex w-full flex-col gap-4 md:max-w-72 md:flex-1">
      <span className="block border-b border-white py-2">
        <h3 className="text-lg font-semibold capitalize">{title}</h3>
      </span>

      <div className="flex flex-col gap-2 text-sm md:text-base">
        {isIcon ? (
          <ul className="flex items-center gap-4">
            {links.map((link, index) => (
              <a
                href={socialLink[index]}
                key={index}
                className="size-8"
                target="_blank"
              >
                <img src={link} alt="icon" />
              </a>
            ))}
          </ul>
        ) : (
          links.map((link, index) =>
            activeLink ? (
              <Link to={"/"} key={index} className="w-max capitalize">
                {link}
              </Link>
            ) : (
              <span key={index} className="capitalize">
                {link}
              </span>
            ),
          )
        )}
      </div>
    </div>
  );
}
