import Card from './Card';

export default class CardDeck {
    private deck: Card[] = [];

    constructor() {
        this.initializeDeck();
    }

    private initializeDeck() {
        this.deck = [];

        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const suitsIc = ['♦', '♥', '♣', '♠'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (const suit of suits) {
            for (const rank of ranks) {
                const suitIc = suitsIc[suits.indexOf(suit)];
                const card = new Card(rank, suit, suitIc);

                // Проверяем, есть ли такая карта уже в колоде, и если есть, пересоздаем
                const existingIndex = this.deck.findIndex(c => c.rank === card.rank && c.suit === card.suit);
                if (existingIndex !== -1) {
                    this.deck.splice(existingIndex, 1);
                }
                this.deck.push(card);
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
