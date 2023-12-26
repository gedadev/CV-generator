function PracticalCollapsedElement({ practicalValues, changeSelectedItem }) {
    return (
        <div className="collapsed-element" key={practicalValues.id}>
            <p>{practicalValues.company}</p>
            <button type="button" className="button edit-element" onClick={() => changeSelectedItem(practicalValues.id)}>Edit</button>
        </div>
    )
}

export default PracticalCollapsedElement