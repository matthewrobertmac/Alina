import React, { useEffect, useState, useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import './FloatingWords.css';

const words = [
    'Привіт - Hello',
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
    'Північ - North',
    'Південь - South',
    'Схід - East',
    'Захід - West',
    'Центр - Center',
    'Ліворуч - Left',
    'Праворуч - Right',
    'Вгору - Up',
    'Вниз - Down'
  ];

  const getRandomWord = () => words[Math.floor(Math.random() * words.length)];
  const getRandomCoord = () => Math.random() * 100;
  const getRandomSize = () => Math.random() * 20 + 15;
  const getRandomSpeed = () => Math.random() * 2 - 1;
  const getRandomOpacity = () => Math.random();
  const MAX_SPEED = 0.03;
  const MIN_SPEED = 0.004;
  
  const clampSpeed = (speed) => Math.min(MAX_SPEED, Math.max(MIN_SPEED, Math.abs(speed)));
  
  export const FloatingWords = () => {
    const [floatingWords, setFloatingWords] = useState([]);
    const requestRef = useRef();
  
    const animate = () => {
        setFloatingWords((prev) => prev.map((word) => {
            if (word.isFrozen) return word; // Skip animation for frozen words
  
            let { x, y, vx, vy, ...rest } = word;
            x += vx;
            y += vy;
            if (x < 0 || x > 100) vx = -vx;
            if (y < 0 || y > 100) vy = -vy;
            vx = clampSpeed(vx) * Math.sign(vx);
            vy = clampSpeed(vy) * Math.sign(vy);
  
            return { x, y, vx, vy, ...rest };
        }));
        requestRef.current = requestAnimationFrame(animate);
    };
  
    const toggleFreeze = (index) => {
      setFloatingWords((prev) =>
          prev.map((word, i) => {
              if (i === index) {
                  // Set opacity to 1 for the frozen word
                  return { ...word, isFrozen: !word.isFrozen, opacity: 1 };
              } else {
                  return word;
              }
          })
      );
  };
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFloatingWords((prev) => {
                const movingWords = prev.filter(word => !word.isFrozen);
                if (movingWords.length >= 40) movingWords.shift();
                return [...prev.filter(word => word.isFrozen), ...movingWords, {
                    word: getRandomWord(),
                    x: getRandomCoord(),
                    y: getRandomCoord(),
                    vx: getRandomSpeed(),
                    vy: getRandomSpeed(),
                    size: getRandomSize(),
                    opacity: getRandomOpacity(),
                    isFrozen: false,
                }];
            });
        }, 1000);
  
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            clearInterval(intervalId);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);
  
    return (
        <div className="floating-words">
            {floatingWords.map((props, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: `${props.y}vh`,
                        left: `${props.x}vw`,
                        fontSize: `${props.size}px`,
                        opacity: props.opacity,
                        color: props.isFrozen ? '#ADD8E6' : 'white',
                    }}
                    className="floating-word"
                    onClick={() => toggleFreeze(index)}
                >
                    {props.word}
                </div>
            ))}
        </div>
    );
  };
  