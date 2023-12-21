import PracticalCard from "./PracticalCard"
import EducationCard from "./educationCard"

function Preview({ contactValues, educationValues, practicalValues }) {
    // console.log(educationValues)
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
                {practicalValues.map((practicalElement, index) => (
                    <PracticalCard practicalElement={practicalElement} index={index} ></PracticalCard>
                ))}
            </div>
            <div className="educational-experience-container">
                <h2>Educational Experience</h2>
                {educationValues.map((educationElement) => (
                    <EducationCard educationElement={educationElement} index={educationElement.id}></EducationCard>
                ))}
            </div>
        </div>
    )
}

export default Preview