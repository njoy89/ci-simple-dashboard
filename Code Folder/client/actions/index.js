import { actions as loadItemsActions, types as loadItemsTypes } from './loadItems';
import { actions as collapseItemActions, types as collapseItemTypes } from './collapseItem';
import { actions as modalActions, types as modalTypes } from './modal';

export const types = {
    ...loadItemsTypes,
    ...collapseItemTypes,
    ...modalTypes
};

export const actions = {
    ...loadItemsActions,
    ...collapseItemActions,
    ...modalActions
};
