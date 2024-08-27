// SubmitButton.jsx

import React from "react"
import { useMutation } from "@apollo/client"
import { gql } from "apollo-boost"

const SUBMIT_BLOOD_TYPE = gql`
  mutation SubmitBloodType($bloodTypeId: Int!) {
    submitBloodType(id: $bloodTypeId) {
      id
      #   Add other fields you want to retrieve after submission
    }
  }
`

const SubmitButton = ({ bloodTypeId }) => {
  const [submitBloodType] = useMutation(SUBMIT_BLOOD_TYPE)

  const handleSubmit = () => {
    submitBloodType({
      variables: { bloodTypeId },
    })
      .then((response) => {
        // Handle response after submission
      })
      .catch((error) => {
        // Handle error if submission fails
      })
  }

  return <button onClick={handleSubmit}>Submit</button>
}

export default SubmitButton
