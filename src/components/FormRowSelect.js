import React from 'react'

const FormRowSelect = ({ name, id, value, handleChange, list, labelText }) => {
  return (
    <div>
      <label className='form-label' htmlFor={name}>
        {labelText || name}
      </label>
      <select
        className='form-input'
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {list.map((options, index) => {
          return (
            <option key={index} value={options}>
              {options}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
