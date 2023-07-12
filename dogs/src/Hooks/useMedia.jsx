import React from 'react'

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const {matches} = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    // changeMatch ativado o useEffect vamos ativa uma vez pelo menos para que não precise mexer no resizer para ele mudar para mobile por exemplo
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media])

  return match;
}

export default useMedia