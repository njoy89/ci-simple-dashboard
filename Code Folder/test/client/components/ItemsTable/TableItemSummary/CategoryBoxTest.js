import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../utils/emptyState';
import sinon from 'sinon';

import CategoryBox from '../../../../../client/components/ItemsTable/TableItemSummary/CategoryBox';
import constants from '../../../../../shared/constants';

describe('CategoryBoxTest component', () => {
    const getComponent = (category, isCollapsed = false) => mount(
        <CategoryBox
            category={ category }
            isCollapsed={ isCollapsed }
        />
    );

    it('should render without errors for each category', () => {
        getComponent(item[constants.CATEGORY_TYPE_METRICS]);
        getComponent(item[constants.CATEGORY_TYPE_BUILD]);
        getComponent(item[constants.CATEGORY_TYPE_UNIT_TEST]);
        getComponent(item[constants.CATEGORY_TYPE_FUNCTIONAL_TEST]);
    });

    it('is invisible when the item is collapsed', () => {
        getComponent(item.metrics, true);
    });

    it('has success background when the category has succeeded ', () => {
        const wrapper = getComponent({ status: constants.CATEGORY_STATUS_SUCCESS });
        expect(wrapper.childAt(0).childAt(0).hasClass('CategoryBox__innerSuccessBox')).to.eql(true);
    });

    it('has failed background when the category has failed', () => {
        const wrapper = getComponent({ status: constants.CATEGORY_STATUS_FAILED });
        expect(wrapper.childAt(0).childAt(0).hasClass('CategoryBox__innerFailedBox')).to.eql(true);
    });

    it('has progressive background when the category is in progress', () => {
        const wrapper = getComponent({ status: constants.CATEGORY_STATUS_IN_PROGRESS, progress: 10 });
        expect(wrapper.childAt(0).childAt(0).hasClass('CategoryBox__innerInProgressBox')).to.eql(true);
    });

    it('has skipped background when the category is has been skipped', () => {
        const wrapper = getComponent({ status: constants.CATEGORY_STATUS_SKIPPED });
        expect(wrapper.childAt(0).childAt(0).hasClass('CategoryBox__innerSkippedBox')).to.eql(true);
    });

    it('displays a progress bar when the category is in progress state', () => {
        const wrapper = getComponent({ status: constants.CATEGORY_STATUS_IN_PROGRESS, progress: 42 });
        const progressBar = wrapper.find('.CategoryBox__innerInProgressBox');
        expect(progressBar.html().includes('width: 42%;')).to.eql(true);
    });
});
