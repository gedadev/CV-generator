function EducationCard({ educationElement, index }) {
    return (
        <div className="education-item" key={index}>
            <p>{educationElement.initDate} — {educationElement.endDate}</p>
            <h3>{educationElement.school}</h3>
            <p>{educationElement.degree}</p>
        </div>
    )
}

export default EducationCard