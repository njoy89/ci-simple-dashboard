import reducer, { selectors } from '../../../client/reducers/collapsedItem';
import { actions } from '../../../client/actions';
import { expect } from 'chai';

describe('collapsedItem', () => {
    describe('reducer', () => {
        it('empty state', () => {
            const state = reducer(undefined, {
                type: 'null'
            });

            expect(state).to.eql({
                itemId: null,
                collapsed: false
            });
        });

        it('responds to action: collapseItem twice', () => {
            const state = reducer(undefined, actions.collapseItem(42));

            expect(state).to.eql({
                itemId: 42,
                collapsed: true
            });

            const newState = reducer(state, actions.collapseItem(42));
            expect(newState).to.eql({
                itemId: null,
                collapsed: false
            });
        });
    });

    describe('selector', () => {
        it('getCollapsedItemId', () => {
            const state = {
                collapsedItem: reducer(undefined, actions.collapseItem(42))
            };

            expect(selectors.getCollapsedItemId(state)).to.eql(42);
        });

        it('isCollapsed', () => {
            const state = {
                collapsedItem: reducer(undefined, actions.collapseItem(42))
            };

            expect(selectors.isCollapsed(state, 10)).to.eql(false);
        });
    });
});
