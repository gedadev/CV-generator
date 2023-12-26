import { useState } from "react"
import EducationForm from "./educationForm"
import EducationCollapsedElement from "./educationCollapsed"

function EducationElement({ educationValues, handleInput }) {
    const [selectedItem, setSelectedItem] = useState(educationValues[0].id)

    const changeSelectedItem = (id) => {
        setSelectedItem(id)
    }

    return (
        <>
        {
            educationValues.map((element) => (
                (selectedItem === element.id) ? (
                    <EducationForm educationValues={element} handleInput={handleInput} key={element.id} changeSelectedItem={changeSelectedItem}></EducationForm>
                ) : (
                    <EducationCollapsedElement educationValues={element} key={element.id} changeSelectedItem={changeSelectedItem}></EducationCollapsedElement>
                )
            ))
        }
        </>
    )
}

export default EducationElement