import reducer, { selectors } from '../../../client/reducers/modal';
import { actions } from '../../../client/actions';
import { expect } from 'chai';

describe('modal', () => {
    describe('reducer', () => {
        it('empty state', () => {
            const state = reducer(undefined, {
                type: 'null'
            });

            expect(state).to.eql({
                itemId: null,
                categoryType: null,
                show: false
            });
        });

        it('handles showCategoryModal action', () => {
            const state = reducer(undefined, actions.showCategoryModal({ itemId: 42, categoryType: 'metrics' }));

            expect(state).to.eql({
                itemId: 42,
                categoryType: 'metrics',
                show: true
            });
        });

        it('handles closeCategoryModal action', () => {
            const stateAfterShowingModal = reducer(
                undefined,
                actions.showCategoryModal({ itemId: 42, categoryType: 'metrics' })
            );
            const stateAfterClosingModal = reducer(
                stateAfterShowingModal,
                actions.closeCategoryModal()
            );

            expect(stateAfterClosingModal).to.eql({
                itemId: null,
                categoryType: null,
                show: false
            });
        });
    });

    describe('selectors', () => {
        it('getCategoryModal', () => {
            expect(selectors.getCategoryModal({
                modal: {
                    itemId: 42,
                    categoryType: 'build',
                    show: true
                }
            })).to.eql({
                itemId: 42,
                categoryType: 'build',
                show: true
            });
        });
    });
});