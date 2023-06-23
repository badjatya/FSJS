function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b); // Sort the deck in ascending order
    const queue = [];

    for (let i = deck.length - 1; i >= 0; i--) {
        if (queue.length) {
            const lastCard = queue.pop();
            queue.unshift(lastCard);
        }
        queue.unshift(deck[i]);
    }

    return queue;
}
const deck = [17, 13, 11, 2, 3, 5, 7];
const result = deckRevealedIncreasing(deck);
console.log(result);
