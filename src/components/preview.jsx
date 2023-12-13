import EducationCard from "./educationCard"

function Preview({ contactValues, educationValues, practicalValues }) {
    return (
        <div className="cv-document">
            <h1>{contactValues[0]}</h1>
            <div className="personal-information-container">
                <p><i className="fa-solid fa-envelope"></i> : {contactValues[1]}</p>
                <p><i className="fa-solid fa-phone"></i> : {contactValues[2]}</p>
                <p><i className="fa-solid fa-location-dot"></i> : {contactValues[3]}</p>
            </div>
            <div className="professional-experience-container">
                <h2>Professional Experience</h2>
                <div className="experience-item">
                    <h3>Madrigal Electromotive</h3>
                    <h3>CTO</h3>
                    <p>04/12/31 — Present</p>
                    <p>Voluptate eu magna magna nostrud aute enim esse irure irure nulla. Cillum veniam minim quis irure. Enim enim aliqua reprehenderit officia officia ad ex proident sunt. Est laborum mollit tempor dolore pariatur.</p>
                </div>
                <div className="experience-item">
                    <h3>LexCorp</h3>
                    <h3>CIO</h3>
                    <p>04/12/28 — 04/12/31</p>
                    <p>Veniam quis proident id nisi nulla laborum mollit esse occaecat. Duis proident irure nulla labore. Minim quis ex tempor adipisicing deserunt. Proident quis elit sint anim consequat dolore dolore eiusmod voluptate culpa labore ad voluptate. </p>
                </div>
            </div>
            <div className="educational-experience-container">
                <h2>Educational Experience</h2>
                {educationValues.map((educationElement, index) => (
                    <EducationCard educationElement={educationElement} index={index}></EducationCard>
                ))}
            </div>
        </div>
    )
}

export default Preview