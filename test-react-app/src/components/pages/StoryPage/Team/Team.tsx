import React, { useState } from 'react'
import { MemberType } from '../../../../types/types'
import { Member } from './Member'
import { Modal } from './Modal/Modal'

type TeamPropsType = {
    teamMembers: Array<MemberType>
    member: MemberType
    modal: boolean
    toggle: () => void
    chooseMember: (chosenMember: MemberType) => void
}

export const Team = ({teamMembers, toggle, chooseMember, member, modal}: TeamPropsType) => {

    return (
        <>
        <section className="team section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="mb-5">Meet our <span>team</span></h2>
                        </div>

                        {teamMembers.map(member => <Member key={member.id} member={member} toggle={toggle} chooseMember={chooseMember} />)}

                    </div>
                </div>
        </section>
        <Modal member={member} show={modal} onClose={toggle}/>
        </>
    )
}