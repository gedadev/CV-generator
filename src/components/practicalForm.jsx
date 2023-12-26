function PracticalForm({ practicalValues, handleInput, changeSelectedItem, deletePracticalElement }) {
    return (
        <div className="form education-info">
            <form>
                <label htmlFor="company-name">Company</label>
                <input type="text" id="company-name" value={practicalValues.company} onChange={(e) => handleInput(practicalValues.id, e.target)} />
                <label htmlFor="position-title">Position</label>
                <input type="text" id="position-title" value={practicalValues.position} onChange={(e) => handleInput(practicalValues.id, e.target)} />
                <label htmlFor="responsibilities">Responsibilities</label>
                <textarea name="responsibilities" id="responsibilities" cols="30" rows="4" value={practicalValues.responsibilities} onChange={(e) => handleInput(practicalValues.id, e.target)}></textarea>
                <label htmlFor="initial-company-date">Initial Date</label>
                <input type="date" id="initial-company-date" value={practicalValues.initDate} onChange={(e) => handleInput(practicalValues.id, e.target)} />
                <label htmlFor="end-company-date">End Date</label>
                <input type="date" id="end-company-date" value={practicalValues.endDate} onChange={(e) => handleInput(practicalValues.id, e.target)} />
            </form>
            <div className="btn-container">
                <button type="button" className="button del-element" onClick={() => deletePracticalElement(practicalValues.id)}>Delete</button>
                <button type="button" className="button save-element" onClick={() => changeSelectedItem(null)}>Done</button>
            </div>
        </div>
    )
}

export default PracticalForm