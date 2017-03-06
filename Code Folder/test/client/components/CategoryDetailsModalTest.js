import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { emptyState, item } from './utils/emptyState';

import CategoryDetailsModal from '../../../client/components/CategoryDetailsModal';

describe('CategoryDetailsModal component', () => {
    const mockStore = configureMockStore([]);

    it('should render', () => {
        const store = mockStore({
            ...emptyState,
            items: {
                data: [ item ]
            },
            modal: {
                show: true,
                itemId: '432459',
                categoryType: 'metrics'
            }
        });

        mount(
            <Provider store={ store }>
                <CategoryDetailsModal />
            </Provider>
        );
    });
});
