import { useState } from "react"
import EducationForm from "./educationForm"
import EducationCollapsedElement from "./educationCollapsed"

function EducationElement({ educationValues, handleInput, addEducationElement, deleteEducationElement }) {
    const [selectedItem, setSelectedItem] = useState(educationValues[0].id)

    const changeSelectedItem = (id) => {
        setSelectedItem(id)
    }

    const handleNewElement =() => {
        const newElement = addEducationElement()
        setSelectedItem(newElement)
    }

    return (
        <>
        {
            educationValues.map((element) => (
                (selectedItem === element.id) ? (
                    <EducationForm educationValues={element} handleInput={handleInput} key={element.id} changeSelectedItem={changeSelectedItem} deleteEducationElement={deleteEducationElement} ></EducationForm>
                ) : (
                    <EducationCollapsedElement educationValues={element} key={element.id} changeSelectedItem={changeSelectedItem}></EducationCollapsedElement>
                )
            ))
        }
        <button className='button add-element' type="button" onClick={handleNewElement}>+ Education</button>
        </>
    )
}

export default EducationElement