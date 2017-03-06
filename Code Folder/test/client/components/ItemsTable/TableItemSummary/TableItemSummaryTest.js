import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../utils/emptyState';
import sinon from 'sinon';

import { TableItemSummary } from '../../../../../client/components/ItemsTable/TableItemSummary/TableItemSummary';
import constants from '../../../../../shared/constants';

describe('TableItemSummary component', () => {
    it('should render without errors', () => {
        mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ false }
                collapseItem={ () => {} }
            />
        );
    });

    it('should highlight the first cell when the row is collapsed', () => {
        const wrapper = mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ true }
                collapseItem={ () => {} }
            />
        );
        const firstRow = wrapper.find('.TableItemSummary__firstCell');
        expect(firstRow.hasClass('TableItemSummary__highlightedCell')).to.eql(true);
    });

    it('should have empty time cell when the item is in pending state', () => {
        let modifiedItem = {
            ...item,
            state: constants.ITEM_STATE_PENDING,
            time_started: null
        };
        const wrapper = mount(
            <TableItemSummary
                item={ modifiedItem }
                isCollapsed={ false }
                collapseItem={ () => {} }
            />
        );
        const timeRow = wrapper.childAt(2);
        expect(timeRow.text()).to.eql('');
    });

    it('should render 4 category boxes', () => {
        const wrapper = mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ false }
                collapseItem={ () => {} }
            />
        );

        const child4 = wrapper.childAt(4);
        const child5 = wrapper.childAt(5);
        const child6 = wrapper.childAt(6);
        const child7 = wrapper.childAt(7);

        expect(child4.childAt(0).hasClass('CategoryBox__box')).to.eql(true);
        expect(child5.childAt(0).hasClass('CategoryBox__box')).to.eql(true);
        expect(child6.childAt(0).hasClass('CategoryBox__box')).to.eql(true);
        expect(child7.childAt(0).hasClass('CategoryBox__box')).to.eql(true);
    });

    it('should hide 4 Category boxes when the row is collapsed', () => {
        const wrapper = mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ true }
                collapseItem={ () => {} }
            />
        );

        const child4 = wrapper.childAt(4);
        const child5 = wrapper.childAt(5);
        const child6 = wrapper.childAt(6);
        const child7 = wrapper.childAt(7);

        expect(child4.childAt(0).hasClass('invisible')).to.eql(true);
        expect(child5.childAt(0).hasClass('invisible')).to.eql(true);
        expect(child6.childAt(0).hasClass('invisible')).to.eql(true);
        expect(child7.childAt(0).hasClass('invisible')).to.eql(true);
    });

    it('should respond to clicks on it', () => {
        const onCollapseItem = sinon.spy();
        const wrapper = mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ true }
                collapseItem={ onCollapseItem }
            />
        );
        wrapper.simulate('click');
        sinon.assert.calledOnce(onCollapseItem);
    });

    it('should not be clickable when an item is in pending state', () => {
        const onCollapseItem = sinon.spy();
        const wrapper = mount(
            <TableItemSummary
                item={ {
                    ...item,
                    state: constants.ITEM_STATE_PENDING
                } }
                isCollapsed={ true }
                collapseItem={ onCollapseItem }
            />
        );
        wrapper.simulate('click');
        expect(onCollapseItem.called).to.eql(false);
    });

    it('should render a desktop icon when the item\'s type is build', () => {
        const wrapper = mount(
            <TableItemSummary
                item={ item }
                isCollapsed={ true }
                collapseItem={ () => {} }
            />
        );
        const firstCell = wrapper.childAt(0).find('i');
        expect(firstCell.hasClass('fa-building')).to.eql(true);
    });

    it('should render a building icon when the item\'s type is firewall', () => {
        const wrapper = mount(
            <TableItemSummary
                item={ {
                    ...item,
                    type: constants.ITEM_TYPE_BUILD
                } }
                isCollapsed={ true }
                collapseItem={ () => {} }
            />
        );
        const firstCell = wrapper.childAt(0).find('i');
        expect(firstCell.hasClass('fa-desktop')).to.eql(true);
    });
});
