import { handleActions } from 'redux-actions';
import { types } from '../actions';

const DEFAULT_STATE = {
    isLoading: false,
    error: null,
    data: []
};

export const selectors = {
    getItems: state => state.items,
    getItemById: (state, id) => selectors.getItems(state).data.find(item => item.id === id)
};

const mergeResults = (exisitingItems, newItems) => {
    const hasTimestamp = item => !!item.time_started;
    const doesntHaveTimestamp = item => !hasTimestamp(item);
    const items = exisitingItems
        // update the existing ones
        .map(exisitingItem => {
            const newItem = newItems.find(newItem => newItem.id === exisitingItem.id);
            if (newItem) {
                return Object.assign({}, exisitingItem, newItem);
            } else {
                return exisitingItem;
            }
        })
        // add new ones
        .concat(
            newItems.filter(newItem => !exisitingItems.find(exisitingItem => exisitingItem.id === newItem.id))
        )
        // sort by time_started
        .sort((item1, item2) => {
            if (item1.time_started > item2.time_started) { return -1; }
            else { return 1; }
        });

    return {
        isLoading: false,
        error: null,
        data: items.filter(doesntHaveTimestamp).concat(items.filter(hasTimestamp)) // pending items goes first
    };
};

export default handleActions({
    [types.loadItemsRequest]: state => ({
        ...state,
        isLoading: true
    }),
    [types.loadItemsSuccess]: (state, { payload }) => mergeResults(state.data, payload),
    [types.loadItemsError]: (state, { payload }) => ({
        isLoading: false,
        data: state.data,
        error: payload
    })
}, DEFAULT_STATE);
