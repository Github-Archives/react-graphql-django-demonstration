import { useState } from "react"
import { useMutation } from "@apollo/client"
import { ADD_MYMODEL, GET_BOOKS } from "../queries"

const FormComponent = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  })

  const [addMyModel] = useMutation(ADD_MYMODEL, {
    refetchQueries: [{ query: GET_BOOKS }],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addMyModel({ variables: { ...formData } })
      console.log("Data submitted successfully")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Field 1:</label>
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Field 2:</label>
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Field 3:</label>
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormComponent
