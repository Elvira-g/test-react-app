import { MemberType } from "../../../types";

type MemberPropsType = {
  member: MemberType;
  toggle: () => void;
  chooseMember: (chosenMember: MemberType) => void;
};

export const Member = ({ member, toggle, chooseMember }: MemberPropsType) => {
  const onButtonClick = () => {
    toggle();
    chooseMember(member);
  };

  return (
    <div className="col-lg-4 mb-4 col-12">
      <div className="team-thumb d-flex align-items-center">
        <img
          src={member.image}
          className="img-fluid custom-circle-image team-image me-4"
          alt=""
        />

        <div className="team-info">
          <h5 className="mb-0">{member.name}</h5>
          <strong className="text-muted">{member.position}</strong>

          <button
            onClick={onButtonClick}
            type="button"
            className="btn custom-modal-btn"
            data-bs-toggle="modal"
            data-bs-target="#kelly"
          >
            <i className="bi-plus-circle-fill">+</i>
          </button>
        </div>
      </div>
    </div>
  );
};
