import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../utils/emptyState';
import sinon from 'sinon';

import { TableItemDetails } from '../../../../../client/components/ItemsTable/TableItemDetails/TableItemDetails';

describe('TableItemDetails component', () => {
    const getComponent = (item, show = true, showCategoryModal = () => {}) => mount(
        <TableItemDetails
            show={ show }
            item={ item }
            showCategoryModal={ showCategoryModal }
        />
    );

    it('should render without errors', () => {
        getComponent(item);
    });

    it('should be hidden when the item is not collapsed', () => {
        const wrapper = getComponent(item, false);
        expect(wrapper.hasClass('hidden')).to.eql(true);
    });

    it('have 5 sections', () => {
        const wrapper = getComponent(item);
        expect(wrapper.find('.TableItemDetails__row').children().length).to.eql(5);
    });
});
