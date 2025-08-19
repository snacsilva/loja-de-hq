import React from 'react';
import { useComics } from '../hooks/useComics';
import { Comic } from '../types';

const Comics: React.FC = () => {
  const { comics, loading, error, getComic } = useComics();

  const handleComicClick = (comicId: number) => {
    getComic(comicId);
  };

  const getImageUrl = (comic: Comic): string => {
    if (comic.images && comic.images.length > 0) {
      return `${comic.images[0].path}/portrait_medium.jpg`;
    }
    return '/placeholder-comic.jpg';
  };

  if (loading) {
    return (
      <div className="comics-grid">
        <div>Carregando quadrinhos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="comics-grid">
        <div>Erro: {error}</div>
      </div>
    );
  }

  return (
    <div className="comics-grid">
      {comics.map((comic) => (
        <div key={comic.id} className="comic-card">
          <h2 className="comic-title">{comic.title}</h2>
          <img 
            className="comic-image" 
            src={getImageUrl(comic)} 
            alt={comic.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-comic.jpg';
            }}
          />
          <p className="comic-description">
            {comic.description || 'Sem descrição disponível'}
          </p>
          <button 
            onClick={() => handleComicClick(comic.id)}
            className="navbar-button"
          >
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Comics;
