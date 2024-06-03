import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { store } from "../../store/store";
import { MemberType } from "../../types";
import { Team } from "./Team/Team";
import { Testimonial } from "./Testimonial/Testimonial";

type StoryPagePropsType = {};

export const StoryPage = (props: StoryPagePropsType) => {
  const [modal, setModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState<Array<MemberType>>([]);
  const [member, setMember] = useState(teamMembers[0]);
  const toggle = () => setModal(!modal);
  const chooseMember = (chosenMember: MemberType) => setMember(chosenMember);

  useEffect(() => {
    setTeamMembers(store.teamMembers);
  }, [store.teamMembers]);

  return (
    <div>
      <Hero title="Company" span="Fashion" />
      <Team
        teamMembers={teamMembers}
        member={member}
        modal={modal}
        toggle={toggle}
        chooseMember={chooseMember}
      />
      <Testimonial />
    </div>
  );
};
