import { useState } from "react"

const FormComponent = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // ! Submit form data to backend from here
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        console.log("Data submitted successfully")
      } else {
        console.error("Error submitting data")
      }
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
