import { createAction } from 'redux-actions';

export const types = {
    showCategoryModal: 'SHOW_CATEGORY_MODAL',
    closeCategoryModal: 'CLOSE_CATEGORY_MODAL'
};

export const actions = {
    showCategoryModal: createAction(types.showCategoryModal),
    closeCategoryModal: createAction(types.closeCategoryModal)
};
