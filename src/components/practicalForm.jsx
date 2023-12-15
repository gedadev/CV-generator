function PracticalForm({ practicalValues, handleInput }) {
    const company = practicalValues[0]
    const title = practicalValues[1]
    const responsibilities = practicalValues[2]
    const initDate = practicalValues[3]
    const endDate = practicalValues[4]

    return (
        <div className="form education-info">
            <form>
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" value={company} onChange={handleInput} />
                <label htmlFor="position-title">Position</label>
                <input type="text" id="position-title" value={title} onChange={handleInput} />
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" cols="30" rows="4" value={responsibilities} onChange={handleInput}></textarea>
                <label htmlFor="initial-company-date">Initial Date</label>
                <input type="date" id="initial-company-date" value={initDate} onChange={handleInput} />
                <label htmlFor="end-company-date">End Date</label>
                <input type="date" id="end-company-date" value={endDate} onChange={handleInput} />
            </form>
        </div>
    )
}

export default PracticalForm