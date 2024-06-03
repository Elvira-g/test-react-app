import img from "../../assets/img/header/positive-european-woman-has-break-after-work.jpg";
import { FormContacts } from "../../components/Form/FormContacts";
import { Hero } from "../../components/Hero";
import { Contacts } from "./Contacts";

type ContactsPagePropsType = {};

export const ContactsPage = (props: ContactsPagePropsType) => {
  return (
    <div>
      <Hero title="Say hello to us" span="love to hear you" image={img} />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">
                Let's <span>begin</span>
              </h2>

              <FormContacts />
            </div>
            <Contacts />
          </div>
        </div>
      </section>
    </div>
  );
};
