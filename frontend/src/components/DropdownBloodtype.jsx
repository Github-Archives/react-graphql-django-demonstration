const DropdownBloodtype = () => {
  return (
    <div>
      <h1>Michigan Blood Match</h1>
      <label htmlFor="bloodTypeDropdown">Select Blood Type</label>
      <select>
        <option value="o-plus">O+</option>
        <option value="a-plus">A+</option>
        <option value="b-plus">B+</option>
        <option value="b-plus">AB+</option>
        <option value="o-minus">O-</option>
        <option value="a-minus">A-</option>
        <option value="b-minus">B-</option>
        <option value="ab-minus">AB-</option>
      </select>
    </div>
  )
}

export default DropdownBloodtype
