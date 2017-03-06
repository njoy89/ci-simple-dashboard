import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../../../utils/emptyState';
import sinon from 'sinon';

import BuildDetailBoxStat from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Build/BuildDetailBoxStat';
import constants from '../../../../../../../shared/constants';

describe('BuildDetailBoxStat component', () => {
    const getComponent = (success, type) => mount(
        <BuildDetailBoxStat
            success={ success }
            type={ type }
        />
    );

    it('should render without errors', () => {
        getComponent(true, constants.BUILD_RELEASE_TYPE);
    });

    it('displays correct build status for debug type', () => {
        const wrapper = getComponent(true, constants.BUILD_DEBUG_TYPE);
        expect(wrapper.find('.BuildDetailBox__buildStatus').childAt(1).text()).to.eql('Build');
    });

    it('displays correct build status for release type', () => {
        const wrapper = getComponent(true, constants.BUILD_RELEASE_TYPE);
        expect(wrapper.find('.BuildDetailBox__buildStatus').childAt(1).text()).to.eql('Release');
    });

    it('is in success status', () => {
        const wrapper = getComponent(true, constants.BUILD_RELEASE_TYPE);
        expect(wrapper.hasClass('BuildDetailBox__buildStatusSuccess')).to.eql(true);
    });
});
