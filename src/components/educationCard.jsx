function EducationCard({ educationElement, index }) {
    return (
        <div className="education-item" key={index}>
            <p>{educationElement[2]} — {educationElement[3]}</p>
            <h3>{educationElement[0]}</h3>
            <p>{educationElement[1]}</p>
        </div>
    )
}

export default EducationCard