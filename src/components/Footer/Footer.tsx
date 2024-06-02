import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../../store/store";
import { SocialProps } from "../../types";
import { NavLink } from "../NavLink/NavLink";
import { Social } from "../Social/Social";

type FooterPropsType = {};

const navLinks = [
  {
    title: "Story",
    link: "/story",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "FAQs",
    link: "/faq",
  },
  {
    title: "Privacy policy",
    link: "/",
  },
  {
    title: "Contacts",
    link: "/contacts",
  },
];

export const Footer = (props: FooterPropsType) => {
  const [socials, setSocials] = useState<Array<SocialProps> | undefined>(
    undefined
  );

  useEffect(() => {
    setSocials(store.socials);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-10 me-auto mb-4">
            <h4 className="text-white mb-3">
              <Link to="/">Little</Link> Fashion
            </h4>
            <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
              Copyright © 2022 <strong>Little Fashion</strong>
            </p>
            <p className="copyright-text">
              Designed by{" "}
              <Link to="#" target="_blank">
                Tooplate
              </Link>
            </p>
          </div>

          <div className="col-lg-5 col-8">
            <h5 className="text-white mb-3">Sitemap</h5>

            <ul className="footer-menu d-flex flex-wrap">
              {navLinks.map((link, key) => (
                <NavLink
                  key={key}
                  title={link.title}
                  link={link.link}
                  classNameLi="footer-menu-item"
                  classNameA="footer-menu-link"
                />
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-4">
            <h5 className="text-white mb-3">Social</h5>

            <ul className="social-icon">
              {socials ? (
                <>
                  {socials.map((social, key) => (
                    <Social key={key} link={social.link} icon={social.icon} />
                  ))}
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
