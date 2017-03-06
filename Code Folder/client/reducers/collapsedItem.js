import { handleActions } from 'redux-actions';
import { types } from '../actions';

const DEFAULT_STATE = {
    itemId: null,
    collapsed: false
};

export const selectors = {
    getCollapsedItemId: state => state.collapsedItem.itemId,
    isCollapsed: (state, id) => selectors.getCollapsedItemId(state) === id
        ? state.collapsedItem.collapsed
        : false
};

export default handleActions({
    [types.collapseItem]: ({ itemId, collapsed }, { payload: id }) => {
        if (itemId === id) {
            return {
                itemId: null,
                collapsed: !collapsed
            };
        } else {
            return {
                itemId: id,
                collapsed: true
            };
        }
    }
}, DEFAULT_STATE);
