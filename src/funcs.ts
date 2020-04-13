import {Deck, Joker, NormalCard} from "./types";
import {Color, Mark} from "./enums";

export  function createDeck():Deck {
    const deck:Deck = [];

    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            const card:NormalCard = {
                color:c,
                mark:m,
                getString(): string {
                    return this.color + this.mark;
                }
            };
            deck.push(card);
        }
    }
    let joker:Joker = {
        type:"small",
        getString(){
           return 'jo';
        }
    };
    deck.push(joker);
    joker = {
        type:'big',
        getString(): string {
            return 'JO';
        }
    };
    deck.push(joker);
    return deck;
}

export  function printDeck(deck:Deck) {
    deck.forEach(item=>{
        let str = item.getString();
        console.log(str);
    })
}
