function PracticalCard({ practicalElement, index }) {
    return (
        <div className="experience-item" key={index}>
            <h3>{practicalElement.company}</h3>
            <h3>{practicalElement.position}</h3>
            <p>{practicalElement.initDate} — {practicalElement.endDate}</p>
            <p>{practicalElement.responsibilities}</p>
        </div>
    )
}

export default PracticalCard