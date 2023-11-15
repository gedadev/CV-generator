function EducationForm() {
    return (
        <div className="education-info">
            <form>
                <input type="text" id="school-name" />
                <input type="text" id="degree" />
                <input type="date" id="school-date"/>
            </form>
        </div>
    )
}

export default EducationForm