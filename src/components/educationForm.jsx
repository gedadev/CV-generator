function EducationForm({ educationValues, handleInput, changeSelectedItem }) {
    return (
        <div className="form education-info">
            <form>
                <label htmlFor="school-name">School</label>
                <input type="text" id="school-name" value={educationValues.school} onChange={(e) => handleInput(educationValues.id, e.target)} />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" value={educationValues.degree} onChange={(e) => handleInput(educationValues.id, e.target)} />
                <label htmlFor="initial-school-date">Initial Date</label>
                <input type="date" id="initial-school-date" value={educationValues.initDate} onChange={(e) => handleInput(educationValues.id, e.target)} />
                <label htmlFor="end-school-date">End Date</label>
                <input type="date" id="end-school-date" value={educationValues.endDate} onChange={(e) => handleInput(educationValues.id, e.target)} />
            </form>
            <button type="button" className="button save-element" onClick={() => changeSelectedItem(null)}>Done</button>
        </div>
    )
}

export default EducationForm