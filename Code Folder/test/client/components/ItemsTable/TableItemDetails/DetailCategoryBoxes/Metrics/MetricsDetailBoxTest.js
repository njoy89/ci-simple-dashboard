import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../../utils/emptyState';
import sinon from 'sinon';

import MetricsDetailBox from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Metrics/MetricsDetailBox';
import constants from '../../../../../../../shared/constants';

describe('MetricsDetailBox component', () => {
    const getComponent = (data, onClick = () => {}) => mount(
        <MetricsDetailBox
            data={ data }
            onClick={ onClick }
        />
    );

    it('should render without errors ', () => {
        getComponent(item.metrics);
    });

    it('renders 4 stats ', () => {
        const wrapper = getComponent(item.metrics);
        expect(wrapper.find('.MetricsDetailBox__stats').children()).to.have.length(4);
    });

    it('handles click event on it ', () => {
        const onClick = sinon.spy();
        const wrapper = getComponent(item.metrics, onClick);
        wrapper.find('.MetricsDetailBox__box').simulate('click');
        expect(onClick.called).to.eql(true);
    });
});
