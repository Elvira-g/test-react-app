import React, { useEffect, useState } from "react";
import { MemberType, store } from "../../../store";
import { Hero } from "./Hero/Hero";
import { Team } from "./Team/Team";
import { Testimonial } from "./Testimonial/Testimonial";

type StoryPagePropsType = {};

// export type MemberType = {
//     id: number
//     name: string
//     lastName: string
//     position: string
//     textMain: string
//     textFirst: string
//     textSecond: string
//     twit: string
//     linkedIn: string
//     email: string
//     image: string
// }

// const teamMembers: Array<MemberType> = [
//     {
//         id: 1,
//         name: 'Don',
//         lastName: 'Haruko',
//         position: 'Product, VP',
//         textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
//         textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
//         twit: '#',
//         linkedIn: '#',
//         email: 'test@test.com',
//         image: img1
//     },
//     {
//         id: 2,
//         name: 'Kelly',
//         lastName: 'Lisa',
//         position: 'Global, Head of Marketing',
//         textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
//         textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
//         twit: '#',
//         linkedIn: '#',
//         email: 'test@test.com',
//         image: img2
//     },
//     {
//         id: 3,
//         name: 'Marie',
//         lastName: 'Sam',
//         position: 'Founder & CEO',
//         textMain: 'Over three years in business had the chance to work on variety of projects, with companies',
//         textFirst: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         textSecond: 'Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.',
//         twit: '#',
//         linkedIn: '#',
//         email: 'test@test.com',
//         image: img3
//     }
// ]

export const StoryPage: React.FC<StoryPagePropsType> = (props) => {
  const [modal, setModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState<Array<MemberType>>([]);
  const [member, setMember] = useState(teamMembers[0]);
  const toggle = () => setModal(!modal);
  const chooseMember = (chosenMember: MemberType) => setMember(chosenMember);

  useEffect(() => {
    const fetchAllMembers = () => {
      setTeamMembers(store.teamMembers);
    };
    fetchAllMembers();
  }, [store.teamMembers]);

  return (
    <div>
      <Hero />
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
