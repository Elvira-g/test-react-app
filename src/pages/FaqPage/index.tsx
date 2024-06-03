import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { store } from "../../store/store";
import { FaqItem } from "../../types";
import { AccordionItem } from "./AccordionItem/AccordionItem";

type FaqPagePropsType = {};

export const FaqPage = (props: FaqPagePropsType) => {
  const [faqGeneral, setFaqGeneral] = useState<Array<FaqItem> | undefined>([]);
  const [faqProducts, setFaqProducts] = useState<Array<FaqItem> | undefined>(
    []
  );

  useEffect(() => {
    setFaqGeneral(store.faqItems.generalInfo);
    setFaqProducts(store.faqItems.products);
  }, []);

  return (
    <div>
      <Hero title="Your favorite questions" span="and our answers to them" />
      <section className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              {faqGeneral ? (
                <>
                  <h2>General Info.</h2>
                  {faqGeneral.map((item) => (
                    <AccordionItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </>
              ) : null}

              {faqProducts ? (
                <>
                  <h2 className="mt-5">
                    About <span>our products</span>
                  </h2>
                  {faqProducts.map((item) => (
                    <AccordionItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
