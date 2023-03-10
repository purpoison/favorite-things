import React from 'react';


const BookInfo = {
    img: '/img/book.jpeg',
    name: 'Місто Півмісяця',
    author: 'Сара Дж. Маас',
    genre: 'Фентезі',
    pages: 800,
    review: [
    {
        reviewName: 'Zdaniuk Anastasia',
        date: '10/22/2020',
        text: 'Сюжет цікавий і захоплює тебе у свій світ миттєво. Суміш фентезі, детективу, пригод і драми робить цю книгу приголомшливою. Добре прописані персонажі зі своїми таємницями, життєвими чварами та любовними переживаннями. Всім рекомендую прочитати цей цикл навіть якщо не читали інші книги Сари Дж.Маас.'
    },
    {
        reviewName: 'autoreg961196601',
        date: '01/15/2021',
        text: 'Дуже сподобалася, як і усі книги цього автора. Дивовижна суміш сучасного світу та магії, відмінна від попередніх книг. Трохи довгий початок, але потім стає зрозумілим, що нічого не було зайвим. Остання третина Книги на одному диханні навіть сплакала в одному місці!'
    },
    {
        reviewName: 'Annа Sheb',
        date: '04/01/2021',
        text: 'Остання третина книги по емоціям це щось! Плакала то від жалю, то від полегшення. Книга чудова, ділить перше місце із серією «Королівство». Дуже дуже раджу прочитати, якщо спочатку, дійсно, важко через велику кількість інформації, то можна трохи по діагоналі прочитати, потім все одно за сюжетом зрозумієте. Це одна з тих книг, після яких не поспішаєш читати наступну.'
    }
]
}

export default function FavoriteBook() {
  return (
    <div>
        <div className='content-wrapper'>
            <div>
                <img src={BookInfo.img} alt={BookInfo.name}/>
            </div>
            <div>
                <h1>{BookInfo.name}</h1>
                <h4><i>{BookInfo.author}</i></h4>
                <p>Жанр книги: {BookInfo.genre}</p>
                <p>Кількість сторінок: {BookInfo.pages}</p>
                <div>
                    <h3>Рецензії:</h3>
                    <div className='review-wrap'>
                        {BookInfo.review.map(el =>(
                            <div className='review-item'>
                                <h4><i>{el.reviewName}</i></h4>
                                <p><i className='violet'>{el.date}</i></p>
                                <p>{el.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
