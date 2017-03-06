import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { emptyState } from './utils/emptyState';

import LoadingPanel from '../../../client/components/LoadingPanel';

describe('Main component', () => {
    const mockStore = configureMockStore([]);

    it('should render', () => {
        const store = mockStore(emptyState);
        const wrapper = mount(
            <Provider store={ store }>
                <LoadingPanel />
            </Provider>
        );

        expect(wrapper.children().length).to.eql(3);
    });

    it('should not be in loading state in in initial state', () => {
        const store = mockStore(emptyState);
        const wrapper = mount(
            <Provider store={ store }>
                <LoadingPanel />
            </Provider>
        );

        expect(wrapper.childAt(0).hasClass('invisible')).to.eql(true);
        expect(wrapper.childAt(1).hasClass('invisible')).to.eql(true);
    });

    it('should not be in loading state in in initial state', () => {
        const store = mockStore({
            ...emptyState,
            items: {
                ...emptyState.items,
                isLoading: true
            }
        });
        const wrapper = mount(
            <Provider store={ store }>
                <LoadingPanel />
            </Provider>
        );

        expect(wrapper.childAt(0).hasClass('invisible')).to.eql(false);
        expect(wrapper.childAt(1).hasClass('invisible')).to.eql(false);
    });

    it('should display error even if it is in loading state', () => {
        const store = mockStore({
            ...emptyState,
            items: {
                ...emptyState.items,
                error: 'error message',
                isLoading: true
            }
        });
        const wrapper = mount(
            <Provider store={ store }>
                <LoadingPanel />
            </Provider>
        );

        expect(wrapper.childAt(0).hasClass('invisible')).to.eql(false);
        expect(wrapper.childAt(1).hasClass('invisible')).to.eql(false);
        expect(wrapper.childAt(2).find('span').text()).to.eql('error message');
    });
});