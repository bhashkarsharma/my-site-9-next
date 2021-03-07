import { Card, CardColor, CardCount, CardFill, CardShape } from 'types/set';

export const generateDeck = (): Card[] =>
    Object.values(CardShape).flatMap((shape) =>
        Object.values(CardColor).flatMap((color) =>
            Object.values(CardFill).flatMap((fill) =>
                Object.values(CardCount).flatMap((count) => ({
                    shape,
                    color,
                    fill,
                    count
                }))
            )
        )
    );

export const shuffle = <T>(arr: T[], shuffleUntil?: number): T[] => {
    const shuffled = [...arr];
    let end = shuffleUntil || shuffled.length;

    while (end) {
        const idx = Math.floor(Math.random() * end);
        end--;
        [shuffled[idx], shuffled[end]] = [shuffled[end], shuffled[idx]];
    }

    return shuffled;
};

export const initDeck = (drawCount: number): Card[] => {
    let deck = shuffle(generateDeck());
    let hand = deck.slice(0, drawCount);
    do {
        deck = shuffle(deck);
        hand = deck.slice(0, drawCount);
    } while (getValidSets(hand).length === 0);
    return deck;
};

export const getDeckWithValidHand = (cards: Card[], drawCount: number): Card[] => {
    if (cards.length <= 12) return cards;

    let deck = [...cards];
    let hand = cards.slice(0, drawCount);
    do {
        deck = shuffle(deck);
        hand = deck.slice(0, drawCount);
    } while (getValidSets(hand).length === 0);
    return deck;
};

export const isValidSet = (cards: Card[]): boolean => {
    if (cards.length !== 3 || !cards[2]) {
        throw new Error('Three cards should be selected');
    }
    const PROPS = ['shape', 'color', 'fill', 'count'];

    // all PROPS same or all different
    const valid = PROPS.map((prop) => {
        const props = cards.map((card) => {
            try {
                return Reflect.get(card, prop);
            } catch {
                console.log(card, prop);
            }
        });
        const size = new Set(props).size;
        return size == 1 || size == 3;
    });

    return valid.filter((i) => i).length === 4;
};

export const getValidSets = (cards: Card[]): number[][] => {
    const valid = [];
    const l = cards.length;

    for (let i = 0; i < l - 2; i++) {
        for (let j = i + 1; j < l - 1; j++) {
            for (let k = j + 1; k < l; k++) {
                if (isValidSet([cards[i], cards[j], cards[k]])) {
                    valid.push([i, j, k]);
                }
            }
        }
    }

    return valid;
};
