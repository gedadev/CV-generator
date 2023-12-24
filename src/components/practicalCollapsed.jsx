function PracticalCollapsedElement({ practicalValues }) {
    return (
        <>
            {practicalValues.map((element) => (
                <div className="collapsed-element">
                    <p>{element.company}</p>
                    <button type="button" className="button edit-element">Edit</button>
                </div>
            ))}
        </>
    )
}

export default PracticalCollapsedElement