import { useState, useEffect } from "react"
// import { useMutation } from "@apollo/client"
// import {
//   ADD_MYMODEL,
//   GET_BOOKS,
//   GET_LAST_5_MYMODELS,
//   GET_BLOOD_TYPES,
// } from "../queries"

// import DropdownBloodtype from "./DropdownBloodtype"
// import DropdownCounty from "./DropdownCounty"

import SubmitButton from "./SubmitButton"

const FormComponent = () => {
  const [selectedBloodTypeId, setSelectedBloodTypeId] = useState(null)

  // const [selectedOption1, setSelectedOption1] = useState("")
  // const [selectedOption2, setSelectedOption2] = useState("")
  // const [addMyModel] = useMutation(ADD_MYMODEL, {
  //   refetchQueries: [
  //     { query: GET_BOOKS },
  //     { query: GET_LAST_5_MYMODELS },
  //     { query: GET_BLOOD_TYPES },
  //   ],
  // })

  // const handleSubmit = () => {
  // Send a POST request to your backend API with selectedOption1 and selectedOption2
  // Handle the response accordingly
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setSelectedOption1({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  const handleDropdownChange = (event) => {
    setSelectedBloodTypeId(event.target.value)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await addMyModel({
  //       variables: { field1: selectedOption1, field2: selectedOption2 },
  //     })
  //     console.log("Data submitted successfully")
  //   } catch (error) {
  //     console.error("Error:", error)
  //   }
  // }

  // useEffect(() => {
  //   console.log("FormComponent loaded")
  // }, [])

  // useEffect(() => {
  //   console.log("\nFormComponent loaded {selectedOption1}")
  // }, [selectedOption1])

  return (
    <div>
      <h3>Total County Population</h3>
      {/* <DropdownBloodtype
        name="bloodTypeDropdown"
        selectedOption={selectedOption1}
        onChange={setSelectedOption1}
        // onChange={handleChange}
        value={selectedOption1.field1}
      />
      <DropdownCounty
        selectedOption={selectedOption2}
        onChange={setSelectedOption2}
      /> */}
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> */}

      <select onChange={handleDropdownChange}>
        {/* Render your dropdown options here */}
      </select>
      <SubmitButton bloodTypeId={selectedBloodTypeId} />
    </div>
  )
}

export default FormComponent

// **************************************************************
//   const [formData, setFormData] = useState({
//     field1: "",
//     field2: "",
//     field3: "",
//   })

//   const [addMyModel] = useMutation(ADD_MYMODEL, {
//     refetchQueries: [{ query: GET_BOOKS }, { query: GET_LAST_5_MYMODELS }],
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await addMyModel({ variables: { ...formData } })
//       console.log("Data submitted successfully")
//     } catch (error) {
//       console.error("Error:", error)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Field 1:</label>
//         <input
//           type="text"
//           name="field1"
//           value={formData.field1}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Field 2:</label>
//         <input
//           type="text"
//           name="field2"
//           value={formData.field2}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Field 3:</label>
//         <input
//           type="text"
//           name="field3"
//           value={formData.field3}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// export default FormComponent
