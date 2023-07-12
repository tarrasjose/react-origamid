import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      // console.log(event);
      if (infinite) {
        const scroll = window.scrollY;
        // console.log(scroll);
        const height = document.body.offsetHeight - window.innerHeight;
        // console.log(height);
  
        if (scroll > height * 0.75 && !wait) {
          // depois que tiver 75%
          // console.log(true);
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
  
          setTimeout(() => {
            wait= false;
            // depois de 500 para não ficar ativando diversas vezes seguidas
          }, 500);
        }
      }
    }
    
    window.addEventListener('wheel', infiniteScroll);
    // wheel aciona toda vez que gira a roda do mouse
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      // Este para limpar o evento
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }

  }, [infinite]);

  return (
    <div>
      {modalPhoto  && ( <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )} 
      {pages.map((page) => (
        <FeedPhotos 
          key={page} 
          user={user} 
          page={page} 
          setModalPhoto={setModalPhoto} 
          setInfinite={setInfinite}
      />
      ))}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
}

export default Feed