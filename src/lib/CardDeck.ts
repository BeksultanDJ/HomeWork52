import Card from './Card';

export default class CardDeck {
    private deck: Card[] = [];

    constructor() {
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const suitsIc = ['♦', '♥', '♣', '♠'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        const availableSuits = new Set(suits);

        while (availableSuits.size > 0) {
            for (const suit of availableSuits) {
                const ranksWithRepeats: string[] = [...ranks];
                for (let i = 0; i < 4; i++) {
                    const randomRankIndex = Math.floor(Math.random() * ranksWithRepeats.length);
                    const rank = ranksWithRepeats.splice(randomRankIndex, 1)[0];
                    this.deck.push(new Card(rank, suit, suitsIc[suits.indexOf(suit)]));
                }
                availableSuits.delete(suit);
            }
        }
    }

    getCard(): Card {
        if (this.deck.length === 0) {
            throw new Error('The deck is empty.');
        }

        const randomIndex = Math.floor(Math.random() * this.deck.length);
        const card = this.deck.splice(randomIndex, 1)[0];
        return card;
    }

    getCards(howMany: number): Card[] {
        if (howMany > this.deck.length) {
            throw new Error('Not enough cards in the deck.');
        }

        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const randomIndex = Math.floor(Math.random() * this.deck.length);
            cards.push(...this.deck.splice(randomIndex, 1));
        }

        return cards;
    }
}
