import { TabContentType } from "../../../types";

type TabContentPropsType = {
  tab: TabContentType;
};

export const TabContent = ({ tab }: TabContentPropsType) => {
  return (
    <div className={`tab-pane fade show active`}>
      <div className="row">
        <div className="col-lg-7 col-12">
          <img src={tab.image} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-5 col-12">
          <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
            <h4 className="mb-3">{tab.title}</h4>

            <p>{tab.text}</p>

            <div className="mt-2 mt-lg-auto">
              <a href={tab.link} className="custom-link mb-2">
                Learn more about us
                <i className="bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
