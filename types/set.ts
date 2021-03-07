export enum CardShape {
    DIAMOND = 'DIAMOND',
    PILL = 'PILL',
    SQUIGGLE = 'SQUIGGLE'
}

export enum CardColor {
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE'
}

export enum CardFill {
    EMPTY = 'EMPTY',
    SHADED = 'SHADED',
    SOLID = 'SOLID'
}

export enum CardCount {
    ONE = 'ONE',
    TWO = 'TWO',
    THREE = 'THREE'
}

export interface Card {
    shape: CardShape;
    color: CardColor;
    fill: CardFill;
    count: CardCount;
}

export enum MessageType {
    NONE,
    INFO,
    SUCCESS,
    ERROR
}

export enum GameState {
    PAUSED,
    STARTED,
    FINISHED
}
