function PracticalCard({ practicalElement, index }) {
    return (
        <div className="experience-item" key={index}>
            <h3>{practicalElement[0]}</h3>
            <h3>{practicalElement[1]}</h3>
            <p>{practicalElement[3]} — {practicalElement[4]}</p>
            <p>{practicalElement[2]}</p>
        </div>
    )
}

export default PracticalCard