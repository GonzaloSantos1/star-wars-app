import './_moviesPage.scss';
import React from 'react';

export const MoviesPage = ({movies}) => {
  return (
    <div className='movies-page'>
      <div className='card-container'>
        {movies.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.poster} alt='' />
            <div className='info-box-movies'>
              <h3>{item.name}</h3>
              <p>
                <b>Year:</b> {item.year}
              </p>
              <p>
                <b>Crawl:</b> {item.crawl}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
