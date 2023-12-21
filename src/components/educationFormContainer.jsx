import EducationForm from "./educationForm"

function FormContainer({ educationValues, updateStates, addElement }) {
    return (
        <div className="education-form-container">
            <h2>Educational Experience</h2>
            {educationValues.map((element) => (
                <EducationForm educationValues={element} updateStates={updateStates} key={element.id} />
            ))}
            <button className='add-element' type="button" onClick={addElement}>+ Education</button>
        </div>
    )
}

export default FormContainer