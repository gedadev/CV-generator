function ContactForm() {
    return (
        <div className="form personal-info">
            <h2>Personal Information</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
            </form>
        </div>
    )
}

export default ContactForm