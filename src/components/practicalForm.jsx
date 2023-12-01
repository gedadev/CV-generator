function PracticalForm() {
    return (
        <div className="form practical-info">
            <h2>Practical Experience</h2>
            <form>
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" />
                <label htmlFor="position-title">Position</label>
                <input type="text" id="position-title" />
                <label htmlFor="responsibilities">Responsibilities</label>
                <input type="text" id="responsibilities" />
                <label htmlFor="initial-company-date">Initial Date</label>
                <input type="date" id="initial-company-date"/>
                <label htmlFor="end-company-date">End Date</label>
                <input type="date" id="end-company-date"/>
            </form>
        </div>
    )
}

export default PracticalForm