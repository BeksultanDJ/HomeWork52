import React, { useState } from 'react';
import './App.css';
import CardDeck from './lib/CardDeck';
import '/lib/Combination.ts';

function App() {
    const [hand, setHand] = useState([]);
    const deck = new CardDeck();

    const generateNewHand = () => {
        const newHand = deck.getCards(5);
        setHand(newHand);
    };

    const generateNewCard = () => {
        const newCard = deck.getCard();
        setHand([...hand, newCard]);
    };

    return (
        <div className="playingCards faceImages">
            {hand.map((card, index) => (
                <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`}>
                    <span className="rank">{card.rank}</span>
                    <span className="suit">{card.suitsIc}</span>
                </span>
            ))}
            <div>
                <button onClick={generateNewHand}>New hand</button>
                <button onClick={generateNewCard}>New card</button>
            </div>
        </div>
    );
}

export default App;
