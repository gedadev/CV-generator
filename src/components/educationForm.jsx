import { useState } from "react"

function EducationForm() {
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [schoolDegreeValue, setSchoolDegreeValue] = useState('')
    const [schoolInitDateValue, setSchoolInitDateValue] = useState('')
    const [schoolEndDateValue, setSchoolEndDateValue] = useState('')

    const handleInput = (e) => {
        if (e.target.id === 'school-name') setSchoolNameValue(e.target.value)
        if (e.target.id === 'degree') setSchoolDegreeValue(e.target.value)
        if (e.target.id === 'initial-school-date') setSchoolInitDateValue(e.target.value)
        if (e.target.id === 'end-school-date') setSchoolEndDateValue(e.target.value)
    }

    return (
        <div className="form education-info">
            <h2>Educational Experience</h2>
            <form>
                <label htmlFor="school-name">School</label>
                <input type="text" id="school-name" value={schoolNameValue} onChange={handleInput} />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" value={schoolDegreeValue} onChange={handleInput} />
                <label htmlFor="initial-school-date">Initial Date</label>
                <input type="date" id="initial-school-date" value={schoolInitDateValue} onChange={handleInput} />
                <label htmlFor="end-school-date">End Date</label>
                <input type="date" id="end-school-date" value={schoolEndDateValue} onChange={handleInput} />
            </form>
        </div>
    )
}

export default EducationForm