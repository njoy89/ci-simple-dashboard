import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../../utils/emptyState';
import sinon from 'sinon';

import TestDetailBox from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Tests/TestDetailBox';
import constants from '../../../../../../../shared/constants';

describe('TestDetailBox component', () => {
    const getComponent = (
        type,
        passed = 0,
        skipped = 0,
        failed = 0,
        coverage = 0,
        onClick = () => {}
    ) => mount(
        <TestDetailBox
            type={ type }
            passed={ passed }
            skipped={ skipped }
            failed={ failed }
            coverage={ coverage }
            onClick={ onClick }
        />
    );

    it('should render without errors for each type', () => {
        getComponent(constants.CATEGORY_TYPE_UNIT_TEST);
        getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST);
    });

    it('handles a click on it', () => {
        const onClick = sinon.spy();
        const wrapper = getComponent(constants.CATEGORY_TYPE_UNIT_TEST, 0, 0, 0, 0, onClick);
        wrapper.find('.TestDetailBox__box').simulate('click');
        expect(onClick.called).to.eql(true);
    });

    it('displays proper header for unit test component', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_UNIT_TEST);
        expect(wrapper.find('.TestDetailBox__header').text()).to.eql('Unit Test');
    });

    it('displays proper header for functional test component', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST);
        expect(wrapper.find('.TestDetailBox__header').text()).to.eql('Functional Test');
    });

    it('renders failed result', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST, 0, 0, 1);
        const figure = wrapper.find('.TestDetailBox__figure');
        expect(figure.hasClass('TestDetailBox__figureFailed')).to.eql(true);
        expect(figure.hasClass('TestDetailBox__figureGood')).to.eql(false);
        expect(figure.hasClass('TestDetailBox__figureAvg')).to.eql(false);
    });

    it('renders positive result when enough number of tests passed', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST, 7, 3);
        const figure = wrapper.find('.TestDetailBox__figure');
        expect(figure.hasClass('TestDetailBox__figureGood')).to.eql(true);
    });

    it('renders warning result when all tests passed, but under certain percentage', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST, 6, 3);
        const figure = wrapper.find('.TestDetailBox__figure');
        expect(figure.hasClass('TestDetailBox__figureAvg')).to.eql(true);
    });

    it('renders proper percentage', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST, 6, 3, 1);
        expect(wrapper.find('.TestDetailBox__figure').text()).to.eql('60%');
    });

    it('renders a linear chart', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST);
        expect(wrapper.find('.TestDetailBox__box').childAt(2).childAt(0).hasClass('LinearChart__linearChart')).to.eql(true);
    });

    it('renders a chart', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST);
        expect(wrapper.find('.TestDetailBox__chart').childAt(0).hasClass('recharts-wrapper')).to.eql(true);
    });

    it('renders warning result when no test has been run', () => {
        const wrapper = getComponent(constants.CATEGORY_TYPE_FUNCTIONAL_TEST, 0, 0, 0);
        const figure = wrapper.find('.TestDetailBox__figure');
        expect(figure.hasClass('TestDetailBox__figureAvg')).to.eql(true);
        expect(figure.find('.TestDetailBox__figureAvg').text()).to.eql('0%');
    });
});
