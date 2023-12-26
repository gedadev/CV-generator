import { useState } from "react"
import PracticalForm from "./practicalForm"
import PracticalCollapsedElement from "./practicalCollapsed"

function PracticalElement({ practicalValues, handleInput, addPracticalElement, deletePracticalElement }) {
    const [selectedItem, setSelectedItem] = useState(practicalValues[0].id)

    const changeSelectedItem = (id) => {
        setSelectedItem(id)
    }

    const handleNewElement = () => {
        const newElement = addPracticalElement()
        setSelectedItem(newElement)
    }

    return (
        <>
        {
            practicalValues.map((element) => (
                (selectedItem === element.id) ? (
                    <PracticalForm practicalValues={element} handleInput={handleInput} key={element.id} changeSelectedItem={changeSelectedItem} deletePracticalElement={deletePracticalElement} />
                 ) : (
                    <PracticalCollapsedElement practicalValues={element} key={element.id} changeSelectedItem={changeSelectedItem} />
                )
            ))
        }
        <button className='button add-element' type="button" onClick={handleNewElement} >+ Practical</button>
        </>
    )
}

export default PracticalElement