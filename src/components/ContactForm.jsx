import { useState } from "react";


const ContactForm = () => {
    const formInitDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formInitDetails,
            [category]: value,
        }
        )
    }

    return (
        <div className="form_container">
            <h1>Contact Us</h1>
            <form action="" className="form_inner">
                <div className="row">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </div>
                <div className="row">
                    <input type="email" value={formDetails.email} placeholder="Email Address" />
                    <input type="tel" value={formDetails.phone} placeholder="Phone No ." />
                </div>
                <textarea rows="6" value={formDetails.message} placeholder="Meddage"></textarea>
                <button type="submit" >Submit</button>
                <div className="row">
                    <p>message</p>
                </div>
            </form>
        </div>
    )
}
export default ContactForm;