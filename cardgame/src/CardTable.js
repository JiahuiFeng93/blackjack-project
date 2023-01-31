import React from 'react';
import { createDeckAndDraw, drawCardFromDeck } from './api';
import { CardLayout } from './Layout.components';
import { Buttons } from './Buttons';
import { compareValues } from './utils';

class CardTable extends React.Component {
    state = {
        cardImageUrl: null,
        cardValue: null,
        deckId: null,
        result: null
    }

    componentDidMount = async () => {
       const { deckId, value, image } = await createDeckAndDraw();
       this.setState({
        deckId: deckId,
        cardValue: value,
        cardImageUrl: image
       });
    }

    onButtonClick = async ({target: {name: choice}}) => {
        const {deckId, cardValue: previousCardValue} = this.state;
        const {value: currentCardValue, image, remaining} = await drawCardFromDeck(deckId);
        const result = compareValues({
            previousCardValue,
            currentCardValue,
            choice
        })

        this.setState({
            result,
            cardValue: currentCardValue,
            cardImageUrl: image,
        })

        if(remaining === 0){
            this.setState({
                result: "are out of cards!"
               });
        }
    }

    render() {
        const {result, cardImageUrl} = this.state;
        return (
            <CardLayout>
                <img src={cardImageUrl} alt="This is your card"/>
                <Buttons onButtonClick={this.onButtonClick}/>
                {result && <h2>{`You ${result}`}</h2>}
            </CardLayout>
        )
    }
}

export default CardTable;