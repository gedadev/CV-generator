import { useState } from 'react'
import './styles/App.css'
import './styles/preview.css'
import ContactForm from './components/contactForm'
import Preview from './components/preview'
import EducationFormContainer from './components/educationFormContainer'
import PracticalFormContainer from './components/practicalFormContainer'

function App() {
  const [contactValues, setContactValues] = useState(['name', 'mail', 'phone', 'address'])
  const [educationValues, setEducationValues] = useState([['school', 'degree', '2020-01-01', '2020-01-01']])
  const [practicalValues, setPracticalValues] = useState([['company', 'title', 'responsibilities', '2020-01-01', '2020-01-01']])
  

  const updateContactStates = (index, newValue, setValues) => {
    const updatedArray = [...contactValues]
    updatedArray[index] = newValue
    setValues(updatedArray)
  }
  
  const handleInput = (e) => {
    if (e.target.id === 'name') updateContactStates(0, e.target.value, setContactValues)
    if (e.target.id === 'email') updateContactStates(1, e.target.value, setContactValues)
    if (e.target.id === 'phone') updateContactStates(2, e.target.value, setContactValues)
    if (e.target.id === 'address') updateContactStates(3, e.target.value, setContactValues)

    if (e.target.id === 'school-name') updateContactStates(0, e.target.value, setEducationValues)
    if (e.target.id === 'degree') updateContactStates(1, e.target.value, setEducationValues)
    if (e.target.id === 'initial-school-date') updateContactStates(2, e.target.value, setEducationValues)
    if (e.target.id === 'end-school-date') updateContactStates(3, e.target.value, setEducationValues)

    if (e.target.id === 'company-name') updateContactStates(0, e.target.value, setPracticalValues)
    if (e.target.id === 'position-title') updateContactStates(1, e.target.value, setPracticalValues)
    if (e.target.id === 'responsibilities') updateContactStates(2, e.target.value, setPracticalValues)
    if (e.target.id === 'initial-company-date') updateContactStates(3, e.target.value, setPracticalValues)
    if (e.target.id === 'end-company-date') updateContactStates(4, e.target.value, setPracticalValues)
}

const addEducationElement = () => {
  const updatedArray = [...educationValues]
  updatedArray.push(['', '', '', ''])
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
        <ContactForm contactValues={contactValues} handleInput={handleInput} />
        <EducationFormContainer educationValues={educationValues} handleInput={handleInput} addElement={addEducationElement}></EducationFormContainer>
        <PracticalFormContainer practicalValues={practicalValues} handleInput={handleInput} addElement={addPracticalElement}></PracticalFormContainer>
      </div>
      <div className="preview">
        <Preview contactValues={contactValues} educationValues={educationValues} practicalValues={practicalValues}></Preview>
      </div>
    </>
  )
}

export default App
