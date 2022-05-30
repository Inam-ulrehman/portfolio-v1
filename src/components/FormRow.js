import React from 'react'

const FormRow = ({ name, labelText, id, handleChange, type, value }) => {
  return (
    <div>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
