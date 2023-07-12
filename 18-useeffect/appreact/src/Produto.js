import React from 'react'

const Produto = () => {
  // function handleScroll(event) {
  //   console.log(event);
  // }

  // window.addEventListener('scroll', handleScroll);

  // Fazendo fora do React.useEffect, se formos no event Listeners no chrome aparecerá vários eventos de scroll e não é isso que queremos, queremos somente um evento

  // Agora usando React.useEffect abaixo, não vai gerar novos eventos de scroll
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div style={{ height: '200vh' }}>
      {/* 100vh total da tela, 200 para dar scroll */}
      <p>Meu Produto</p>
    </div>
  );
}

export default Produto