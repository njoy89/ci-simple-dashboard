import { createAction } from 'redux-actions';

export const types = {
    loadItems: 'LOAD_ITEMS',
    loadItemsRequest: Symbol('LOAD_ITEMS_REQUEST'),
    loadItemsSuccess: Symbol('LOAD_ITEMS_SUCCESS'),
    loadItemsError: Symbol('LOAD_ITEMS_ERROR')
};

export const actions = {
    loadItems: createAction(types.loadItems),
    loadItemsRequest: createAction(types.loadItemsRequest),
    loadItemsSuccess: createAction(types.loadItemsSuccess),
    loadItemsError: createAction(types.loadItemsError)
};
