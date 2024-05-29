import React, { useState } from 'react'
import { MemberType } from '../../../../store/store'
import { Modal } from './Modal/Modal'

type TeamPropsType = {
    teamMembers: Array<MemberType>
    member: MemberType
    modal: boolean
    toggle: () => void
    chooseMember: (chosenMember: MemberType) => void
}

type MemberPropsType = {
    member: MemberType
    toggle: () => void
    chooseMember: (chosenMember: MemberType) => void
}


const Member: React.FC<MemberPropsType> = ({member, toggle, chooseMember}) => {

    const onButtonClick = () => {
        toggle()
        chooseMember(member)
    }
    
    return (
        <div className="col-lg-4 mb-4 col-12">
            <div className="team-thumb d-flex align-items-center">
                <img src={member.image} className="img-fluid custom-circle-image team-image me-4" alt="" />

                <div className="team-info">
                    <h5 className="mb-0">{member.name}</h5>
                    <strong className="text-muted">{member.position}</strong>

                    <button onClick={onButtonClick} type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#kelly">
                        <i className="bi-plus-circle-fill">+</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Team: React.FC<TeamPropsType> = ({teamMembers, toggle, chooseMember, member, modal}) => {

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