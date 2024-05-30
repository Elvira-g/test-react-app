import React, { useEffect, useState } from 'react'
import { MemberType, store } from '../../../store/store'
import { Hero } from '../../Hero/Hero'
import { Team } from './Team/Team'
import { Testimonial } from './Testimonial/Testimonial'

type StoryPagePropsType = {

}

export const StoryPage: React.FC<StoryPagePropsType> = (props) => {

    const [modal, setModal] = useState(false)
    const [teamMembers, setTeamMembers] = useState<Array<MemberType>>([])
    const [member, setMember] = useState(teamMembers[0])
    const toggle = () => setModal(!modal);
    const chooseMember = (chosenMember: MemberType) => setMember(chosenMember)

    useEffect(() => {
        const fetchAllMembers = () => {
            setTeamMembers(store.teamMembers)
        }
        fetchAllMembers()
    }, [store.teamMembers])

    return (
        <div>
            <Hero title='Company' span='Fashion'  />
            <Team 
            teamMembers={teamMembers}
            member={member}
            modal={modal}
            toggle={toggle}
            chooseMember={chooseMember} />
            <Testimonial />
        </div>
    )
}