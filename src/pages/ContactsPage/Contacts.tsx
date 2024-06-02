import { useEffect, useState } from "react";
import { Social } from "../../components/Social/Social";
import { store } from "../../store/store";
import { SocialProps } from "../../types";

type Props = {};

export const Contacts = (props: Props) => {
  const [socials, setSocials] = useState<Array<SocialProps> | undefined>(
    undefined
  );

  useEffect(() => {
    setSocials(store.socials);
  }, []);

  return (
    <div className="col-lg-6 col-12 mt-5 ms-auto">
      <div className="row">
        <div className="col-6 border-end contact-info">
          <h6 className="mb-3">New Business</h6>

          <a href="mailto:hello@company.com" className="custom-link">
            hello@company.com
            <i className="bi-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-6 contact-info">
          <h6 className="mb-3">Main Studio</h6>

          <a href="mailto:studio@company.com" className="custom-link">
            studio@company.com
            <i className="bi-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-6 border-top border-end contact-info">
          <h6 className="mb-3">Our Office</h6>

          <p className="text-muted">Akershusstranda 20, 0150 Oslo, Norway</p>
        </div>

        <div className="col-6 border-top contact-info">
          <h6 className="mb-3">Our Socials</h6>

          <ul className="social-icon">
            {socials ? (
              <>
                {socials.map((item, key) => (
                  <Social key={key} link={item.link} icon={item.icon} />
                ))}
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
