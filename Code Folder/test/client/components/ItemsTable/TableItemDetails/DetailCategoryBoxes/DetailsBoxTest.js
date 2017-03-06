import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../utils/emptyState';
import sinon from 'sinon';

import DetailsBox from '../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/DetailsBox';
import constants from '../../../../../../shared/constants';

describe('DetailsBoxTest component', () => {
    const getComponent = (status, progress) => mount(
        <DetailsBox
            status={ status }
            progress={ progress }
        >
            <span>Test</span>
        </DetailsBox>
    );

    it('should render without errors for each status', () => {
        getComponent(constants.CATEGORY_STATUS_SUCCESS);
        getComponent(constants.CATEGORY_STATUS_IN_PROGRESS);
        getComponent(constants.CATEGORY_STATUS_FAILED);
        getComponent(constants.CATEGORY_STATUS_SKIPPED);
    });

    it('should render skipped message when the category has been skipped', () => {
        const wrapper = getComponent(constants.CATEGORY_STATUS_SKIPPED);
        expect(wrapper.find('.DetailsBox__boxSkippedContent').text()).to.eql('Skipped');
    });

    it('should render loading items when the category is in progress state', () => {
        const wrapper = getComponent(constants.CATEGORY_STATUS_IN_PROGRESS, 35);
        expect(wrapper.find('.fa-spinner')).to.have.length(1);
        expect(wrapper.find('.DetailsBox__progressNumber').text()).to.eql('35%');
    });

    it('should have proper background', () => {
        expect(getComponent(constants.CATEGORY_STATUS_SUCCESS).childAt(0).hasClass('DetailsBox__boxSuccess')).to.eql(true);
        expect(getComponent(constants.CATEGORY_STATUS_FAILED).childAt(0).hasClass('DetailsBox__boxFailed')).to.eql(true);
        expect(getComponent(constants.CATEGORY_STATUS_IN_PROGRESS).childAt(0).hasClass('DetailsBox__boxInProgress')).to.eql(true);
        expect(getComponent(constants.CATEGORY_STATUS_SKIPPED).childAt(0).hasClass('DetailsBox__boxSkipped')).to.eql(true);
    });
});
