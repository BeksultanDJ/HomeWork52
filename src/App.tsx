import React, { useState } from 'react';
import './App.css';

function Card() {
    const [hand, setHand] = useState([]); // Состояние для руки карт

    const suits = {
        1: 'diams', // diams
        2: 'hearts', // hearts
        3: 'clubs', // clubs
        4: 'spades', // spades
    };

    const generateNewHand = () => {
        const newHand = [];
        for (let i = 0; i < 4; i++) {
            const newRank = Math.floor(Math.random() * 13) + 1; // Генерируем случайное число для ранга
            const newSuit = Math.floor(Math.random() * 4) + 1; // Генерируем случайное число для масти
            newHand.push({ rank: newRank, suit: newSuit });
        }
        setHand(newHand); // Обновляем состояние руки карт
    };

    return (
        <div className="playingCards faceImages">
            {hand.map((card, index) => (
                <span key={index} className={`card rank-${card.rank} ${suits[card.suit]}`}>
          <span className="rank">{card.rank}</span>
          <span className="suit">{suits[card.suit]}</span>
        </span>
            ))}

            <button onClick={generateNewHand}>New hand</button>
        </div>
    );
}

export default Card;
