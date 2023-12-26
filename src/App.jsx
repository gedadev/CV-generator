import { useState } from 'react'
import './styles/App.css'
import './styles/preview.css'
import ContactForm from './components/contactForm'
import Preview from './components/preview'
import PracticalElement from './components/practicalElement'
import EducationElement from './components/educationElement'
import { v4 as uuid } from 'uuid';

function App() {
  const [contactValues, setContactValues] = useState(['John Dow', 'jdow@mail.com', '12 1234-1234', 'Mexico'])
  const [practicalValues, setPracticalValues] = useState([{company: 'Mesa Verde Bank and Trust', position: 'CFO', responsibilities: 'Tracking cash flow and financial planning and analyzing the company\'s financial strengths and weaknesses and proposing strategic directions', initDate: '2020-01-01', endDate: '2020-01-01', id: uuid()}])
  const [educationValues, setEducationValues] = useState([{school: 'Harvard Business School', degree: 'MBA', initDate: '2020-01-01', endDate: '2020-01-01', id: uuid()}])
  
  const updateContactStates = (index, newValue) => {
    const updatedArray = [...contactValues]
    updatedArray[index] = newValue
    setContactValues(updatedArray)
  }
  
  const handleContactInput = (e) => {
    if (e.target.id === 'name') updateContactStates(0, e.target.value)
    if (e.target.id === 'email') updateContactStates(1, e.target.value)
    if (e.target.id === 'phone') updateContactStates(2, e.target.value)
    if (e.target.id === 'address') updateContactStates(3, e.target.value)
  }

  const updateStates = (id, key, value, state, setState) => {
    const update = state.map(element => {
      if (element.id === id) element[key] = value
      return element
    })
    setState(update)
  }

  const handleInput = (id, node) => {
    if (node.id  === 'school-name') updateStates(id, 'school', node.value, educationValues, setEducationValues)
    if (node.id  === 'degree') updateStates(id, 'degree', node.value, educationValues, setEducationValues)
    if (node.id  === 'initial-school-date') updateStates(id, 'initDate', node.value, educationValues, setEducationValues)
    if (node.id  === 'end-school-date') updateStates(id, 'endDate', node.value, educationValues, setEducationValues)

    if (node.id === 'company-name') updateStates(id, 'company', node.value, practicalValues, setPracticalValues)
    if (node.id === 'position-title') updateStates(id, 'position', node.value, practicalValues, setPracticalValues)
    if (node.id === 'responsibilities') updateStates(id, 'responsibilities', node.value, practicalValues, setPracticalValues)
    if (node.id === 'initial-company-date') updateStates(id, 'initDate', node.value, practicalValues, setPracticalValues)
    if (node.id === 'end-company-date') updateStates(id, 'endDate', node.value, practicalValues, setPracticalValues)
  }

  const addEducationElement = () => {
    const newElement = {school: '', degree: '', initDate: '', endDate: '', id: uuid()}
    const updatedArray = [...educationValues]
    updatedArray.push(newElement)
    setEducationValues(updatedArray)
    return newElement.id
  }

  const addPracticalElement = () => {
    const newElement = {company: '', position: '', responsibilities: '', initDate: '', endDate: '', id: uuid()}
    const updatedArray = [...practicalValues]
    updatedArray.push(newElement)
    setPracticalValues(updatedArray)
    return newElement.id
  }

  const deletePracticalElement = (id) => {
    const update = []
    practicalValues.forEach((element) => {
      if (element.id !== id) update.push(element)
    })
    setPracticalValues(update)

    update.length > 0 ? setPracticalValues(update) : setPracticalValues(practicalValues)
  }

  const deleteEducationElement = (id) => {
    const update = []
    educationValues.forEach((element) => {
      if (element.id !== id) update.push(element)
    })

    update.length > 0 ? setEducationValues(update) : setEducationValues(educationValues)
  }

  return (
    <>
      <div className="content-information">
        <ContactForm contactValues={contactValues} handleContactInput={handleContactInput} />
        <div className="practical-elements-container">
          <h2>Practical Experience</h2>
          <PracticalElement practicalValues={practicalValues} handleInput={handleInput} addPracticalElement={addPracticalElement} deletePracticalElement={deletePracticalElement}></PracticalElement>
        </div>
        <div className="practical-elements-container">
          <h2>Educational Experience</h2>
          <EducationElement educationValues={educationValues} handleInput={handleInput} addEducationElement={addEducationElement} deleteEducationElement={deleteEducationElement} ></EducationElement>
        </div>
      </div>
      <div className="preview">
        <Preview contactValues={contactValues} educationValues={educationValues} practicalValues={practicalValues}></Preview>
      </div>
    </>
  )
}

export default App
