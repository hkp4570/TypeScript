import {Color, Mark} from "./enums";


export type Deck = Card[];

export interface Card {
    getString():string
}

export interface NormalCard extends Card {
    color:Color,
    mark:Mark
}

//大小王
export interface Joker extends Card{
    type:'big' | 'small'
}
