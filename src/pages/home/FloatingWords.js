import React, { useEffect, useState } from 'react';
import './FloatingWords.css';

// const words = ['Привіт', 'Світ', 'Україна', 'Реакт']; // Add more Ukrainian words as per your need
const words = [
    // 'Привіт - Hello',
    'Світ - World',
    'Україна - Ukraine',
    'Книга - Book',
    'Друг - Friend',
    'Сонце - Sun',
    'Місяць - Moon',
    'Вода - Water',
    'Любов - Love',
    'Місто - City',
    'Квітка - Flower',
    'Машина - Car',
    'Їжа - Food',
    'Дерево - Tree',
    'Хмара - Cloud',
    'День - Day',
    'Ніч - Night',
    'Школа - School',
    'Робота - Work',
    'Здоров’я - Health',
    'Час - Time',
    'Колір - Color',
    'Життя - Life',
    'Музика - Music',
    'Подорож - Journey',
    'Домівка - Home',
    'Чоловік - Man',
    'Жінка - Woman',
    'Дитина - Child',
    'Мрія - Dream',
    'Казка - Fairy tale',
    'Океан - Ocean',
    'Зірка - Star',
    'Небо - Sky',
    'Мистецтво - Art',
    'Поезія - Poetry',
    'Танець - Dance',
    'Творчість - Creativity',
    'Натхнення - Inspiration',
    'Гармонія - Harmony',
    'Мелодія - Melody',
    'Романтика - Romance',
    'Пейзаж - Landscape',
    'Сутінки - Twilight',
    'Світанок - Dawn',
    'Захід - Sunset',
    'Світло - Light',
    'Темрява - Darkness',
    'Космос - Space',
    'Барви - Colors',
    'Фантазія - Fantasy',
    'Тиша - Silence',
    'Шум - Noise',
    'Радість - Joy',
    'Смуток - Sadness',
    'Сльоза - Tear',
    'Усмішка - Smile',
    'Веселощі - Merriment',
    'Вітер - Wind',
    'Сніг - Snow',
    'Дощ - Rain',
    'Гора - Mountain',
    'Ріка - River',
    'Ліс - Forest',
    'Душа - Soul',
    'Відчуття - Feeling',
    'Тепло - Warmth',
    'Холод - Cold',
    'Острів - Island',
    'Море - Sea',
    'Пляж - Beach',
    'Птах - Bird',
    'Звір - Animal',
    'Рослина - Plant',
    'Гора - Mountain',
    'Долина - Valley',
    'Пустеля - Desert',
    'Вулкан - Volcano',
    'Озеро - Lake',
    'Лід - Ice',
    'Печера - Cave',
    'Водоспад - Waterfall',
    'Луг - Meadow',
    'Равлина - Ravine',
    'Замок - Castle',
    'Хата - Cottage',
    'Парк - Park',
    'Сад - Garden',
    'Галявина - Glade',
    'Берег - Shore',
    'Країна - Country',
    'Континент - Continent',
    'Планета - Planet',
    'Зоря - Star',
    'Галактика - Galaxy',
    'Всесвіт - Universe',
    'Комета - Comet',
    'Астероїд - Asteroid',
    'Сузір’я - Constellation',
    'Туманність - Nebula',
    // 'Північ - North',
    // 'Південь - South',
    // 'Схід - East',
    // 'Захід - West',
    // 'Центр - Center',
    // 'Ліворуч - Left',
    // 'Праворуч - Right',
    // 'Вгору - Up',
    // 'Вниз - Down'
  ];
  

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
const getRandomCoord = () => Math.floor(Math.random() * 100);

export const FloatingWords = () => {
  const [floatingWords, setFloatingWords] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFloatingWords((prev) => [
        ...prev,
        {
          word: getRandomWord(),
          top: getRandomCoord(),
          left: getRandomCoord(),
        },
      ]);
    }, 2000); // Adjust the interval to manage the frequency of words

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="floating-words">
      {floatingWords.map((wordObj, index) => (
        <div
          key={index}
          className="floating-word"
          style={{ top: `${wordObj.top}vh`, left: `${wordObj.left}vw` }}
        >
          {wordObj.word}
        </div>
      ))}
    </div>
  );
};
