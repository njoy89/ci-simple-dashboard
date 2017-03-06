import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ItemsTableHeader from '../../../../client/components/ItemsTable/ItemsTableHeader';

describe('ItemsTableHeader component', () => {
    it('should render proper columns', () => {
        const wrapper = mount(
            <ItemsTableHeader />
        );

        const columns = wrapper.find('th').map(node => node.text());

        expect(columns).to.have.length(8);
        expect(columns[0]).to.eql('Changelist / Build');
        expect(columns[1]).to.eql('Owner');
        expect(columns[2]).to.eql('Time Started');
        expect(columns[3]).to.eql('State');
        expect(columns[4]).to.eql('Metrics');
        expect(columns[5]).to.eql('Build');
        expect(columns[6]).to.eql('Unit Test');
        expect(columns[7]).to.eql('Functional Test');
    });
});
