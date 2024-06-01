import React from 'react'

type Props = {

}
 
export const FormContacts = (props: Props) => {

    return(
        <form className="contact-form me-lg-5 pe-lg-3" role="form">

                                <div className="form-floating">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required />

                                    <label htmlFor="name">Full name</label>
                                </div>

                                <div className="form-floating my-4">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />

                                    <label htmlFor="email">Email address</label>
                                </div>
                                
                                <div className="form-floating my-4">
                                    <input type="subject" name="subject" id="subject"className="form-control" placeholder="Subject" required />

                                    <label htmlFor="subject">Subject</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <textarea id="message" name="message" className="form-control" placeholder="Leave a comment here" required style={{height: "160px"}}></textarea>

                                    <label htmlFor="message">Tell us about the project</label>
                                </div>

                                <div className="col-lg-5 col-6">
                                    <button type="submit" className="form-control">Send</button>
                                </div>
                            </form>
    )
}