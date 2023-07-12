import React from 'react'

const Select = ({ options, value, setValue, ...props }) => {
  // ...props caso queira colocar o require por exemplo
  return (
    <select 
      value={value} 
      onChange={({target}) => setValue(target.value)} 
      {...props}
      >
      <option value="" disabled> 
      {/*o value="" deixou selecionado o selecione */}
        Selecione
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select