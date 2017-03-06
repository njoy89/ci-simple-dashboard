import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import LinearChart from '../../../../../../../client/components/ItemsTable/TableItemDetails/DetailCategoryBoxes/Tests/LinearChart';

describe('LinearChart component', () => {
    const getComponent = value => mount(
        <LinearChart
            value={ value }
        />
    );

    it('should render', () => {
        getComponent(0);
    });

    it('render progress bar for 42%', () => {
        const wrapper = getComponent(42);
        expect(wrapper.find('.LinearChart__innerChart').html().indexOf('42%;')).to.be.at.least(1);
    });

    it('renders coverage percentage', () => {
        const wrapper = getComponent(42);
        expect(wrapper.find('.LinearChart__text').childAt(0).text()).to.eql('42%');
    });

    it('treats 42% as an average result', () => {
        const wrapper = getComponent(42);
        expect(wrapper.find('.LinearChart__textAvg')).to.have.length(1);
        expect(wrapper.find('.LinearChart__textGood')).to.have.length(0);
    });

    it('treats 84% as a good result', () => {
        const wrapper = getComponent(84);
        expect(wrapper.find('.LinearChart__textAvg')).to.have.length(0);
        expect(wrapper.find('.LinearChart__textGood')).to.have.length(1);
    });
});
