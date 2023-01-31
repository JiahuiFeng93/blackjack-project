import axios from 'axios';

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
});

const createDeckAndDraw = async () => {
    const { data } = await api.get('new/shuffle/', {  // You can just take the data from the response by using "const { data } = " rather than "const response = "
        params: {
            deck_count: 1
        }
    })
    
    const { deck_id: deckId } = data;

    const cardDrawn = await drawCardFromDeck(deckId)
    // console.log(cardDrawn);
    return cardDrawn;
};

const drawCardFromDeck = async (deckId) => {
    const {data} = await api.get(`${deckId}/draw/`, {
        params: {
            count: 1,
        }
    });
    

    const {cards, remaining} = data;
    const {value, image} = cards[0];
    console.log(data);
    return {deckId, value, image, remaining};
}

export { createDeckAndDraw, drawCardFromDeck };