import EducationForm from "./educationForm"

function FormContainer({ educationValues, handleInput, addElement }) {
    return (
        <div className="education-form-container">
            <h2>Educational Experience</h2>
            {educationValues.map((element, index) => (
                <EducationForm educationValues={element} handleInput={handleInput} key={index} />
            ))}
            <button className='add-element' type="button" onClick={addElement}>+ Education</button>
        </div>
    )
}

export default FormContainer