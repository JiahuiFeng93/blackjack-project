import axios from 'axios';

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck/'
});

const createDeckAndDraw = async () => {
    const response = await api.get('new/shuffle/', {  // You can also just take the data from the response by using "const { data } = " rather than "const response = "
        params: {
            deck_count: 1
        }
    })
    console.log(response);
};

export { createDeckAndDraw };