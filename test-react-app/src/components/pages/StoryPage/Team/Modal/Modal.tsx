import React from 'react'
import { MemberType } from '../../../../../store/store'

type ModalPropsType = {
    member: MemberType
    show: boolean
    onClose: () => void
}

export const Modal: React.FC<ModalPropsType> = ({member, show, onClose}) => {
    
    return (
           <>
        {show && <div className="modal member-modal show">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0">
                    <div className="modal-header flex-column">
                        <h3 className="modal-title" id="exampleModalLabel">{member.name} {member.lastName}</h3>

                        <h6 className="text-muted">{member.position}</h6>

                        <button onClick={onClose} type="button" className="btn-close"></button>
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
                            <li className="me-3"><strong>Where to find?</strong></li>

                            <li><a href={member.twit} className="social-icon-link bi-twitter"></a></li>

                            <li><a href={member.linkedIn} className="social-icon-link bi-linkedin"></a></li>

                            <li><a href={member.email} className="social-icon-link bi-envelope"></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        
        }
</> 
        
    )
}