import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { item } from './../../utils/emptyState';
import sinon from 'sinon';

import SummaryDetailsBox from '../../../../../client/components/ItemsTable/TableItemDetails/SummaryDetailsBox';
import constants from '../../../../../shared/constants';

describe('SummaryDetailsBox component', () => {
    const getComponent = item => mount(
        <SummaryDetailsBox
            item={ item }
        />
    );

    it('should render without errors', () => {
        getComponent(item);
    });

    it('should display correct status message for accepted status', () => {
        expect(getComponent(item).find('.SummaryDetailsBox__boxAcceptedBigText').text()).to.eql('Auto-Merged');
    });

    it('should display correct status message for complete status', () => {
        expect(
            getComponent({ ...item, state: constants.ITEM_STATE_COMPLETE })
                .find('.SummaryDetailsBox__boxCompleteBigText').text()
        ).to.eql('Complete');
    });

    it('should display correct status message for rejected status', () => {
        expect(
            getComponent({
                ...item,
                u_tests: {
                    ...item.u_tests,
                    status: constants.CATEGORY_STATUS_FAILED,
                    failed: 10
                },
                state: constants.ITEM_STATE_REJECTED
            })
                .find('.SummaryDetailsBox__boxRejectedBigText').text()
        ).to.eql('10 Unit Tests Failed');
    });

    it('should display correct status message for failed status', () => {
        expect(
            getComponent({
                ...item,
                metrics: {
                    ...item.metrics,
                    status: constants.CATEGORY_STATUS_FAILED,
                    test: { value: 64, rel: '-' }
                },
                state: constants.ITEM_STATE_FAILED
            })
                .find('.SummaryDetailsBox__boxFailedBigText').text()
        ).to.eql('Metrics Reduction');
    });
});
