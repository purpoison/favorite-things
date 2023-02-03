import React from 'react';
const InfoRecipe ={
  title: 'Биті огірки',
  img: '/img/bitye-ogurcy.jpg',
  text: '"Биті" огірки - страва, що прийшла до нас з азійської кухні. Це швидкі мариновані огірки, дуже смачна закуска-салат, що готується за лічені хвилини. Такі рецепти особливо цінні, коли гості на порозі.',
  ingredients:[
    {
      ingredient: 'огірки',
      gram: '500г'
    },
    {
      ingredient: 'яблучний оцет',
      gram: '5 столових ложок'
    },
    {
      ingredient: 'лимонний сік',
      gram: '2 столові ложки'
    },
    {
      ingredient: 'кунжутна олія',
      gram: '2 столові ложки'
    },
    {
      ingredient: 'червоний перець',
      gram: '1/2 чайної ложки'
    },
    {
      ingredient: 'цукор',
      gram: 'дрібка'
    },
    {
      ingredient: 'кунжут',
      gram: 'по смаку'
    }
  ],
  recipe:['Помийте та підсушіть огірки','Наріжте огірки тоненькими скибками','Складіть у лоток та додайте всі інгредієнти ','Закрийте лоток кришкою та добре потрусіть, щоб все перемішалось','Поставте ємність у холодильник наніч','Насолоджуйтесь']
}

export default function FavoriteRecipe(props) {
  return (
    <div className='recipe-wrap'>
      <div className='flex'>
        <div className='recipe-img'><img src={InfoRecipe.img}/></div>
        <div>
          <h1>{InfoRecipe.title}</h1>
          <p>{InfoRecipe.text}</p>
          <div>
            <p>Інгредієнти:</p>
            <ul>
              {InfoRecipe.ingredients.map(el =>(
                <li>{el.ingredient}: {el.gram}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Покроковий рецепт:</p>
            <ol>
              {InfoRecipe.recipe.map(el =>(
                <li>{el}</li>
              ))}
              </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
