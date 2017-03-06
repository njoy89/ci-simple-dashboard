import reducer, { selectors } from '../../../client/reducers/items';
import { actions } from '../../../client/actions';
import { expect } from 'chai';

describe('items', () => {
    describe('reducer', () => {
        it('empty state', () => {
            expect(reducer(undefined, {
                type: 'null'
            })).to.eql({
                isLoading: false,
                error: null,
                data: []
            });
        });

        it('handles request on empty state', () => {
            expect(reducer(undefined, actions.loadItemsRequest())).to.eql({
                isLoading: true,
                error: null,
                data: []
            });
        });

        it('handles request on nonempty state', () => {
            expect(reducer({
                error: 'error',
                data: [ { a: 42 } ]
            }, actions.loadItemsRequest())).to.eql({
                isLoading: true,
                error: 'error',
                data: [ { a: 42 } ]
            });
        });

        it('handles error', () => {
            expect(reducer({
                isLoading: true,
                data: [ { a: 10 } ],
                error: null
            }, actions.loadItemsError('error'))).to.eql({
                isLoading: false,
                error: 'error',
                data: [ { a: 10 } ]
            });
        });

        it('handles success, add a new item', () => {
            expect(reducer({
                isLoading: true,
                data: [],
                error: null
            }, actions.loadItemsSuccess([{ id: 10 }]))).to.eql({
                isLoading: false,
                error: null,
                data: [ { id: 10 } ]
            });
        });

        it('handles success, add second new item to an existing one, preserving the right order', () => {
            expect(reducer({
                isLoading: true,
                data: [ { id: 40, time_started: '2015-01-01' }],
                error: null
            }, actions.loadItemsSuccess([{ id: 42, time_started: '2016-01-01' }]))).to.eql({
                isLoading: false,
                error: null,
                data: [ { id: 42, time_started: '2016-01-01' }, { id: 40, time_started: '2015-01-01' } ]
            });
        });

        it('handles success, merges two items not affecting the second existing one', () => {
            expect(reducer({
                isLoading: true,
                data: [ { id: 40, time_started: '2015-01-01', status: null }, { id: 41, time_started: '2014-01-01' } ],
                error: null
            }, actions.loadItemsSuccess([{ id: 40, status: 'success' }]))).to.eql({
                isLoading: false,
                error: null,
                data: [
                    { id: 40, time_started: '2015-01-01', status: 'success' },
                    { id: 41, time_started: '2014-01-01' }
                ]
            });
        });
    });

    describe('selector', () => {
        it('getItems', () => {
            expect(selectors.getItems({
                items: { a: 42 }
            })).to.eql({
                a: 42
            });
        });

        it('getItemById', () => {
            expect(selectors.getItemById({
                items: { data: [ { id: 42, status: 'success' } ] }
            }, 42)).to.eql({
                id: 42,
                status: 'success'
            })
        });
    });
});
