import { useState } from "react"
import michiganCountyData from "../assets/county_data"

const DropdownCounty = () => {
  const [counties, setCounties] = useState(michiganCountyData)

  return (
    <div>
      <label htmlFor="countyDropdown" className="blood-type-text">
        Select County
      </label>
      <select>
        {counties.map((county, index) => (
          <option key={index} value={county}>
            {county}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropdownCounty
