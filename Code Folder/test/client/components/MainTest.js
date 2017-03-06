import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { emptyState } from './utils/emptyState';

import Main from '../../../client/components/Main';

describe('Main component', () => {
    it('should render', () => {
        const mockStore = configureMockStore([]);
        const store = mockStore(emptyState);

        const wrapper = mount(
            <Provider store={ store }>
                <Main />
            </Provider>
        );

        expect(wrapper.children().length).to.eql(3);

        wrapper.unmount();
    });
});