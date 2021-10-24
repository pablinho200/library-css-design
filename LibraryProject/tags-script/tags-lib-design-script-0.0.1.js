class CardsRow extends document.getElementsByTagName("cardsrow") {
    cards = [
        null,
        null,
        null,
        null,
    ];
    constructor() {}
    addCard = function (card) {
        if (cards[0] == null) {
            cards[0] = card;
        } else if (cards[1] == null) {
            cards[1] = card;
        } else if (cards[2] == null) {
            cards[2] = card;
        } else if (cards[3] == null) {
            cards[3] = card;
        }
    };

    Card = class extends document.getElementsByTagName("card") {
        constructor() {}
    }
}