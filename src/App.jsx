import { useState } from 'react'
import './styles/App.css'
import './styles/preview.css'
import ContactForm from './components/contactForm'
import Preview from './components/preview'
import EducationFormContainer from './components/educationFormContainer'
import PracticalFormContainer from './components/practicalFormContainer'
import { v4 as uuid } from 'uuid';

function App() {
  const [contactValues, setContactValues] = useState(['name', 'mail', 'phone', 'address'])
  const [educationValues, setEducationValues] = useState([{school: 'school', degree: 'degree', initDate: '2020-01-01', endDate: '2020-01-01', id: uuid()}])
  const [practicalValues, setPracticalValues] = useState([['company', 'title', 'responsibilities', '2020-01-01', '2020-01-01']])
  
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

  const updateStates = (id, key, value, setValues) => {
    const update = educationValues.map(element => {
      if (element.id === id) element[key] = value
      return element
    })
    setValues(update)
  }

  const handleInput = (id, node) => {
    if (node.id  === 'school-name') updateStates(id, 'school', node.value, setEducationValues)
    if (node.id  === 'degree') updateStates(id, 'degree', node.value, setEducationValues)
    if (node.id  === 'initial-school-date') updateStates(id, 'initDate', node.value, setEducationValues)
    if (node.id  === 'end-school-date') updateStates(id, 'endDate', node.value, setEducationValues)
  }

  const addEducationElement = () => {
    const updatedArray = [...educationValues]
    updatedArray.push({school: '', degree: '', initDate: '', endDate: '', id: uuid()})
    setEducationValues(updatedArray)
  }

  const addPracticalElement = () => {
    const updatedArray = [...practicalValues]
    updatedArray.push(['', '', '', ''])
    setPracticalValues(updatedArray)
  }

  return (
    <>
      <div className="content-information">
        <ContactForm contactValues={contactValues} handleContactInput={handleContactInput} />
        <EducationFormContainer educationValues={educationValues} updateStates={handleInput} addElement={addEducationElement}></EducationFormContainer>
        <PracticalFormContainer practicalValues={practicalValues} handleInput={handleInput} addElement={addPracticalElement}></PracticalFormContainer>
      </div>
      <div className="preview">
        <Preview contactValues={contactValues} educationValues={educationValues} practicalValues={practicalValues}></Preview>
      </div>
    </>
  )
}

export default App
