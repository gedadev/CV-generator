import PracticalForm from "./practicalForm"

function PracticalFormContainer({ practicalValues, handleInput, addElement }) {
    return (
        <div className="practical-form-container">
            <h2>Practical Experience</h2>
            {practicalValues.map((element) => (
                <PracticalForm practicalValues={element} handleInput={handleInput} key={element.id} />
            ))}
            <button className='add-element' type="button" onClick={addElement}>+ Practical</button>
        </div>
    )
}

export default PracticalFormContainer