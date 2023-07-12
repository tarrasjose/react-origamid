import React from 'react'

const Header = () => {
  console.log('Renderizou');
  return (
    <div>
      <h1>Header aqui</h1>
    </div>
  )
}

// Usando o memo aqui, ele só será renderizado uma vez
export default React.memo(Header);