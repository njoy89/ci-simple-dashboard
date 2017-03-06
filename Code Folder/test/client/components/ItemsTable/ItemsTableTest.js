import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { emptyState, item } from './../utils/emptyState';

import ItemsTable from '../../../../client/components/ItemsTable/ItemsTable';

describe('ItemsTable component', () => {
    const mockStore = configureMockStore([]);

    it('should render without error', () => {
        const store = mockStore(emptyState);

        mount(
            <Provider store={ store }>
                <ItemsTable />
            </Provider>
        );
    });

    it('should render table with one item', () => {
        const store = mockStore({
            ...emptyState,
            items: {
                ...emptyState.items,
                data: [
                    item
                ]
            }
        });

        const wrapper = mount(
            <Provider store={ store }>
                <ItemsTable />
            </Provider>
        );

        expect(wrapper.children().length).to.eql(3);
        expect(wrapper.childAt(0).name()).to.eql('ItemsTableHeader');
        expect(wrapper.childAt(1).name()).to.eql('Connect(TableItem)');

        // each item is followed by a separator row
        expect(wrapper.childAt(2).name()).to.eql('TableSeparatorItem');
    });
});
