import React, { useState } from 'react';
import './App.css';

function Card() {
    const [hand, setHand] = useState([]);

    const rank = {
        1: 'A',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: 'J',
        12: 'Q',
        13: 'K',
    }

    const suits = {
        1: 'diams',
        2: 'hearts',
        3: 'clubs',
        4: 'spades',
    };

    const suitsIc = {
        1: '♦', // diams
        2: '♥', // hearts
        3: '♣', // clubs
        4: '♠', // spades
    };

    const generateNewHand = () => {
        const newHand = [];
        const usedRanks = [];
        for (let i = 0; i < 4; i++) {
            let newRank, newSuit;
            do {
                newRank = Math.floor(Math.random() * 13) + 1;
            } while (usedRanks.includes(newRank));
            usedRanks.push(newRank);
            do {
                newSuit = Math.floor(Math.random() * 4) + 1;
            } while (newHand.some(card => card.rank === newRank && card.suit === newSuit));
            newHand.push({ rank: newRank, suit: newSuit });
        }
        setHand(newHand);
    };

    return (
        <div className="playingCards faceImages">
            {hand.map((card, index) => (
                <span key={index} className={`card rank-${rank[card.rank].toLowerCase()} ${suits[card.suit]}`}>
                    <span className="rank">{rank[card.rank]}</span>
                    <span className="suit">{suitsIc[card.suit]}</span>
                </span>
            ))}

            <button onClick={generateNewHand}>New hand</button>
        </div>
    );
}

export default Card;
