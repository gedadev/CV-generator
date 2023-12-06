import { useState } from "react"

function PracticalForm() {
    const [companyNameValue, setCompanyNameValue] = useState('')
    const [companyTitleValue, setCompanyTitleValue] = useState('')
    const [companyResponsibilitiesValue, setCompanyResponsibilitiesValue] = useState('')
    const [companyInitDateValue, setCompanyInitDateValue] = useState('')
    const [companyEndDateValue, setCompanyEndDateValue] = useState('')

    const handleInput = (e) => {
        if (e.target.id === 'company-name') setCompanyNameValue(e.target.value)
        if (e.target.id === 'position-title') setCompanyTitleValue(e.target.value)
        if (e.target.id === 'responsibilities') setCompanyResponsibilitiesValue(e.target.value)
        if (e.target.id === 'initial-company-date') setCompanyInitDateValue(e.target.value)
        if (e.target.id === 'end-company-date') setCompanyEndDateValue(e.target.value)
    }

    return (
        <div className="form practical-info">
            <h2>Practical Experience</h2>
            <form>
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" value={companyNameValue} onChange={handleInput} />
                <label htmlFor="position-title">Position</label>
                <input type="text" id="position-title" value={companyTitleValue} onChange={handleInput} />
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" cols="30" rows="4" value={companyResponsibilitiesValue} onChange={handleInput}></textarea>
                <label htmlFor="initial-company-date">Initial Date</label>
                <input type="date" id="initial-company-date" value={companyInitDateValue} onChange={handleInput} />
                <label htmlFor="end-company-date">End Date</label>
                <input type="date" id="end-company-date" value={companyEndDateValue} onChange={handleInput} />
            </form>
        </div>
    )
}

export default PracticalForm