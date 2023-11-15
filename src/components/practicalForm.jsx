function PracticalForm() {
    return (
        <div className="practical-info">
            <form>
                <input type="text" id="company-name" />
                <input type="text" id="position-title" />
                <input type="text" id="responsibilities" />
                <input type="date" id="company-date"/>
            </form>
        </div>
    )
}

export default PracticalForm