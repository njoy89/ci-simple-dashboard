import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { emptyState, item } from './../utils/emptyState';

import TableItem from '../../../../client/components/ItemsTable/TableItem';

describe('TableItem component', () => {
    const mockStore = configureMockStore([]);
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({
            ...emptyState,
            items: {
                ...emptyState.items,
                data: [
                    item
                ]
            }
        });

        wrapper = mount(
            <Provider store={ store }>
                <TableItem id="432459" />
            </Provider>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a row with \'success\' background', () => {
        expect(wrapper.hasClass('TableItem__success')).to.eql(true);
    });

    it('should render a row that have two subrows, summary and details', () => {
        expect(wrapper.children().length).to.eql(2);
        expect(wrapper.childAt(0).name()).to.eql('Connect(TableItemSummary)');
        expect(wrapper.childAt(1).name()).to.eql('Connect(TableItemDetails)');
    });
});
