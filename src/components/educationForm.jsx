function EducationForm({ educationValues, handleInput}) {
    const school = educationValues[0]
    const degree = educationValues[1]
    const initDate = educationValues[2]
    const endDate = educationValues[3]

    return (
        <div className="form education-info">
            <h2>Educational Experience</h2>
            <form>
                <label htmlFor="school-name">School</label>
                <input type="text" id="school-name" value={school} onChange={handleInput} />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" value={degree} onChange={handleInput} />
                <label htmlFor="initial-school-date">Initial Date</label>
                <input type="date" id="initial-school-date" value={initDate} onChange={handleInput} />
                <label htmlFor="end-school-date">End Date</label>
                <input type="date" id="end-school-date" value={endDate} onChange={handleInput} />
            </form>
        </div>
    )
}

export default EducationForm