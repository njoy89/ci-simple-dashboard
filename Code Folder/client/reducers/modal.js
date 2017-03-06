import { handleActions } from 'redux-actions';
import { types } from '../actions';

const DEFAULT_STATE = {
    itemId: null,
    categoryType: null,
    show: false
};

export const selectors = {
    getCategoryModal: state => ({
        // get only those fields that are related to the category modal
        itemId: state.modal.itemId,
        categoryType: state.modal.categoryType,
        show: state.modal.show
    })
};

export default handleActions({
    [types.showCategoryModal]: (state, { payload: { itemId, categoryType } }) => ({
        itemId,
        categoryType,
        show: true
    }),
    [types.closeCategoryModal]: () => ({
        itemId: null,
        categoryType: null,
        show: false
    })
}, DEFAULT_STATE);
