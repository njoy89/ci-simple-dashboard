import { combineReducers } from 'redux';

import items, { selectors as itemsSelectors } from './items';
import collapsedItem, { selectors as collapsedItemSelectors } from './collapsedItem';
import modal, { selectors as modalSelectors } from './modal';

export default combineReducers({
    items,
    collapsedItem,
    modal
});

export const selectors = {
    ...itemsSelectors,
    ...collapsedItemSelectors,
    ...modalSelectors
};
