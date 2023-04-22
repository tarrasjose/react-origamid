import React from 'react'

const Input = ({ label, id, ...props }) => {
  // Colocando props todas as outras propriedades que eu passar após label e id vão estar dentro dessa props 
  return (
    <div style={{margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  )
}

export default Input