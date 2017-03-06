import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../../utils/emptyState';
import sinon from 'sinon';

import MetricsDetailBoxStat from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Metrics/MetricsDetailBoxStat';
import constants from '../../../../../../../shared/constants';

describe('MetricsDetailBoxStat component', () => {
    const getComponent = (stat, name) => mount(
        <MetricsDetailBoxStat
            stat={ stat }
            name={ name }
        />
    );

    it('should render without errors for each ', () => {
        getComponent(item.metrics.maintainability, 'Maintainability');
        getComponent(item.metrics.security, 'Security');
        getComponent(item.metrics.workmanship, 'Workmanship');
        getComponent(item.metrics.test, 'Test');
    });

    it('renders up arrow and stat value', () => {
        const wrapper = getComponent(item.metrics.maintainability, 'Maintainability');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > span').text()).to.eql('53');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow').hasClass('MetricsDetailBox__statBoxArrowUp')).to.eql(true);
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > i').hasClass('fa-arrow-up')).to.eql(true);
    });

    it('renders equal icon and stat value', () => {
        const wrapper = getComponent(item.metrics.security, 'Maintainability');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > span').text()).to.eql('64');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow').hasClass('MetricsDetailBox__statBoxArrowEq')).to.eql(true);
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > i').hasClass('fa-arrow-right')).to.eql(true);
    });

    it('renders down arrow and stat value', () => {
        const wrapper = getComponent({
            ...item.metrics.workmanship,
            rel: '-'
        }, 'Maintainability');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > span').text()).to.eql('72');
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow').hasClass('MetricsDetailBox__statBoxArrowDown')).to.eql(true);
        expect(wrapper.find('.MetricsDetailBox__statBoxArrow > i').hasClass('fa-arrow-down')).to.eql(true);
    });
});
