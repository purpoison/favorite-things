import React from 'react';

const BandInfo = {
  name: 'BTS',
  img: '/img/bts.png',
  members: ['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook'],
  albums: [
    {
      Picture: '/img/albums/Faceyourself.jpg',
      albName: 'Face Yourself',
      year: 2018
    },
    {
      Picture: '/img/albums/Love_Yourself_Tear_Cover.jpeg',
      albName: 'Love Yourself: Tear',
      year: 2018
    },
    {
      Picture: '/img/albums/BTS,_Love_Yourself_Answer,_album_cover.jpg',
      albName: 'Love Yourself: Answer',
      year: 2018
    },
    {
      Picture: '/img/albums/BTS_-_Map_of_the_Soul_Persona.png',
      albName: 'Map of the Soul: Persona',
      year: 2019
    },
    {
      Picture: '/img/albums/BTS_-_Map_of_the_Soul_7.png',
      albName: 'Map of the Soul: 7',
      year: 2020
    },
    {
      Picture: '/img/albums/BTS_-_Be_Cover.png',
      albName: 'Be',
      year: 2020
    },
    {
      Picture: '/img/albums/BTS_-_Butter.png',
      albName: 'Butter',
      year: 2021
    },
    {
      Picture: '/img/albums/BTS_Proof_album_cover_art.jpg',
      albName: 'Proof',
      year: 2022
    },
  ]
};

export default function FavoriteBand() {
  return (
    <div>
      <div className='content-wrapper'>
        <div className='text-band'>
          <h1>{BandInfo.name}</h1>
          <p>Учасники групи:</p>
          <ul className='member-list'>
            {BandInfo.members.map(el =>(
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className='albums'>
          <h3>Альбоми:</h3>
          <div className='album-wrap'>
            {BandInfo.albums.map(elem =>(
                <div className='album-item'>
                  <div><img src={elem.Picture} alt={elem.albName}/></div>
                  <div>
                    <p>{elem.albName}</p>
                    <p>{elem.year}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
