import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {

}

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}
 
export const FormContacts = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => alert(`
        name: ${data.name},
        email: ${data.email},
        subject: ${data.subject ? data.subject : 'empty'},
        message: ${data.message ? data.message : 'empty'}`)

    return(
        <form className="contact-form me-lg-5 pe-lg-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating">
                <input id="name" {...register("name", { required: 'This field is required' })} className="form-control" placeholder="Email address"/>
                <label htmlFor="name">Full name</label>
            </div>
            <p>{errors.name?.message}</p>
            <div className="form-floating my-4">
                <input {...register("email", { required: 'This field is required', minLength:{
                    value: 5,
                    message: 'Min length is 5'
                } })} className="form-control" placeholder="Email address"/>
                <label htmlFor="email">Email address</label>
            </div>
            <p>{errors.email?.message}</p>
            <div className="form-floating my-4">
                <input {...register("subject")} className="form-control" placeholder="Subject"/>
                <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-floating mb-4">
                <textarea {...register("message")} className="form-control" placeholder="Leave a comment here" style={{height: "160px"}}/>
                <label htmlFor="message">Tell us about the project</label>
            </div>

            <div className="col-lg-5 col-6">
                <input type="submit" className="form-control" value="Send"/>
            </div>
        </form>
    )
}