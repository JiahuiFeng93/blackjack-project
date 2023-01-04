import React from 'react';
import { createDeckAndDraw } from './api';
import { CardLayout } from './Layout.components';
import { Buttons } from './Buttons';

class CardTable extends React.Component {
    state = {
        cardImageUrl: null,
        cardValue: null,
        deckId: null,
    }

    componentDidMount = async () => {
       const { deckId, value, image } = await createDeckAndDraw();
       this.setState({
        deckId: deckId,
        cardValue: value,
        cardImageUrl: image
       });
    }

    render() {
        return (
            <CardLayout>
                <img src={this.state.cardImageUrl} alt="This is your card"/>
                <Buttons/>
            </CardLayout>
        )
    }
}

export default CardTable;