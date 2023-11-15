function ContactForm() {
    return (
        <div className="personal-info">
            <form>
                <input type="text" id="name" />
                <input type="email" id="email" />
                <input type="tel" id="phone" />
                <input type="text" id="address" />
            </form>
        </div>
    )
}

export default ContactForm