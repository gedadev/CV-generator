import { useState } from "react"
import PracticalForm from "./practicalForm"
import PracticalCollapsedElement from "./practicalCollapsed"

function PracticalElement({ practicalValues, handleInput }) {
    const [selectedItem, setSelectedItem] = useState(practicalValues[0].id)

    const changeSelectedItem = (id) => {
        setSelectedItem(id)
    }

    return (
        <>
        {
            practicalValues.map((element) => (
                (selectedItem === element.id) ? (
                    <PracticalForm practicalValues={element} handleInput={handleInput} key={element.id} changeSelectedItem={changeSelectedItem} />
                 ) : (
                    <PracticalCollapsedElement practicalValues={element} key={element.id} changeSelectedItem={changeSelectedItem} />
                )
            ))
        }
        </>
    )
}

export default PracticalElement