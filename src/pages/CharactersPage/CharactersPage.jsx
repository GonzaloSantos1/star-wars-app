import React from 'react';
import './_charactersPage.scss';

export const CharactersPage = ({characters}) => {
  return (
    <>
      <div className='characters-page'>
        <div className='card-container'>
          {characters.map((item, index) => (
            <div key={index} className='card'>
              <img src={item.image} alt='' />
              <div className='info-box-characters'>
                <h3>{item.name}</h3>
                <p>
                  <b>Role:</b> {item.role}
                </p>
                <p>
                  <b>Origin:</b> {item.origin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
