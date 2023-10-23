export default class Card {
    public rank: string;
    public suit: string;
    public suitsIc: string;

    constructor(rank: string, suit: string, suitsIc: string) {
        this.rank = rank;
        this.suit = suit;
        this.suitsIc = suitsIc;
    }
}
