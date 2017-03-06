import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../../utils/emptyState';
import sinon from 'sinon';

import BuildDetailBox from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Build/BuildDetailBox';
import constants from '../../../../../../../shared/constants';

describe('BuildDetailBox component', () => {
    const getComponent = (data, onClick = () => {}) => mount(
        <BuildDetailBox
            data={ data }
            onClick={ onClick }
        />
    );

    it('should render without errors', () => {
        getComponent(item.build);
    });

    it('handles click event on it', () => {
        const onClick = sinon.spy();
        const wrapper = getComponent(item.build, onClick);
        wrapper.find('.BuildDetailBox__box').simulate('click');
        expect(onClick.called).to.eql(true);
    });

    it('renders two build targets', () => {
        const wrapper = getComponent(item.build);
        expect(wrapper.find('.BuildDetailBox__buildStatuses').children().length).to.eql(2);
    });
});
