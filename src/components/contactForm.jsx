import { useState } from "react"

function ContactForm() {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [addressValue, setAddressValue] = useState('')

    const handleInput = (e) => {
        if (e.target.id === 'name') setNameValue(e.target.value)
        if (e.target.id === 'email') setEmailValue(e.target.value)
        if (e.target.id === 'phone') setPhoneValue(e.target.value)
        if (e.target.id === 'address') setAddressValue(e.target.value)
    }
    
    return (
        <div className="form personal-info">
            <h2>Personal Information</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={nameValue} onChange={handleInput} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={emailValue} onChange={handleInput} />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value={phoneValue} onChange={handleInput} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={addressValue} onChange={handleInput} />
            </form>
        </div>
    )
}

export default ContactForm