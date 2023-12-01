function EducationForm() {
    return (
        <div className="form education-info">
            <h2>Educational Experience</h2>
            <form>
                <label htmlFor="school-name">School</label>
                <input type="text" id="school-name" />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" />
                <label htmlFor="initial-school-date">Initial Date</label>
                <input type="date" id="initial-school-date"/>
                <label htmlFor="end-school-date">End Date</label>
                <input type="date" id="end-school-date"/>
            </form>
        </div>
    )
}

export default EducationForm