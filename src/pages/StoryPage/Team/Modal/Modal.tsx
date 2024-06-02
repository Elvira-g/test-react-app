import { Link } from "react-router-dom";
import emailImg from "../../../../assets/img/icons/email.png";
import linkedinImg from "../../../../assets/img/icons/linkedin.png";
import twitImg from "../../../../assets/img/icons/twitter.png";
import { MemberType } from "../../../../types";

type ModalPropsType = {
  member: MemberType;
  show: boolean;
  onClose: () => void;
};

export const Modal = ({ member, show, onClose }: ModalPropsType) => {
  return (
    <>
      {show && (
        <div className="modal member-modal show">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0">
              <div className="modal-header flex-column">
                <h3 className="modal-title" id="exampleModalLabel">
                  {member.name} {member.lastName}
                </h3>

                <h6 className="text-muted">{member.position}</h6>

                <button
                  onClick={onClose}
                  type="button"
                  className="btn-close"
                ></button>
              </div>

              <div className="modal-body">
                <h5 className="mb-4">{member.textMain}</h5>

                <div className="row mb-4">
                  <div className="col-lg-6 col-12">
                    <p>{member.textFirst}</p>
                  </div>

                  <div className="col-lg-6 col-12">
                    <p>{member.textSecond}</p>
                  </div>
                </div>

                <ul className="social-icon">
                  <li className="me-3">
                    <strong>Where to find?</strong>
                  </li>

                  <li>
                    <Link
                      to={member.twit}
                      className="social-icon-link bi-twitter"
                    >
                      <img className="social-icon" src={twitImg} alt="" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={member.linkedIn}
                      className="social-icon-link bi-linkedin"
                    >
                      <img className="social-icon" src={linkedinImg} alt="" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={member.email}
                      className="social-icon-link bi-envelope"
                    >
                      <img className="social-icon" src={emailImg} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
