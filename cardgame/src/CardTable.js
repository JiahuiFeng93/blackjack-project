import React from 'react';
import { createDeckAndDraw } from './api';

class CardTable extends React.Component {
    state = {

    }

    componentDidMount = async () => {
        await createDeckAndDraw();
    }

    render() {
        return (
            <div>Something</div>
        )
    }
}

export default CardTable;