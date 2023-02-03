import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FavoriteBook from './Components/favorites/FavoriteBook';
import FavoriteBand from './Components/favorites/FavoriteBand';
import FavoriteRecipe from './Components/favorites/FavoriteRecipe';

class App extends React.Component {
  render(){
    return (
      <div className='wrap'>
        <Header/>
        <div className='container'>
          <test/>
          <section id='fbook'>
            <div className='test1'></div>
            <FavoriteBook/>
          </section>
          <section id='fband'>
          <div className='test1'></div>
            <FavoriteBand/>
          </section>
          <section id='frecipe'>
          <div className='test1'></div>
            <FavoriteRecipe/>
          </section>
        </div>
        <Footer/>
      </div>
      );
    }
  }


export default App;
