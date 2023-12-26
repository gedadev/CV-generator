function EducationCollapsedElement({ educationValues, changeSelectedItem }) {
    return (
        <div className="collapsed-element" key={educationValues.id}>
            <p>{educationValues.school}</p>
            <button type="button" className="button edit-element" onClick={() => changeSelectedItem(educationValues.id)}>Edit</button>
        </div>
    )
}

export default EducationCollapsedElement