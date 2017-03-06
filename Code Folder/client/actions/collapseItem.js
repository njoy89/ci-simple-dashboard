import { createAction } from 'redux-actions';

export const types = {
    collapseItem: 'COLLAPSE_ITEM'
};

export const actions = {
    collapseItem: createAction(types.collapseItem)
};
