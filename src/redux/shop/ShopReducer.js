import SHOPDATA from './Shopdata'

const INITIAL_STATE = {
    collections: SHOPDATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default shopReducer;