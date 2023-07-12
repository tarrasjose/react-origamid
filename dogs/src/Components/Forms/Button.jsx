import React from 'react'
import styles from './button.module.css'

const Button = ({children, ...props }) => {
  // children pega o nome do botão no login form
  // props como restante, aí podemos passar o disabled lá no botão eu posso utilizar o disabled, onclick, onsubmit e outros
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Button