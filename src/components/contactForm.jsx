function ContactForm({ contactValues, handleContactInput }) {
    const name = contactValues[0]
    const mail = contactValues[1]
    const phone = contactValues[2]
    const address = contactValues[3]
    
    return (
        <div className="form personal-info">
            <h2>Personal Information</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={handleContactInput} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={mail} onChange={handleContactInput} />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={handleContactInput} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={address} onChange={handleContactInput} />
            </form>
        </div>
    )
}

export default ContactForm