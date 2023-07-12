import React from 'react'

const Input = ({ id, label, onChange, ...props }) => {
  // ...props pode ser usado para todos valores iguais a ele, por exemplo value={value}, como já desestruturou o id antes, tem que passar ele
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input;