import React from 'react';
import styles from './SummaryDetailsBox.scss';
import itemPropType from './../../utils/itemPropType';
import constants from '../../../../shared/constants';
import {
    Button,
    Glyphicon,
    FormControl
} from 'react-bootstrap';

const getFailReason = ({
    [constants.CATEGORY_TYPE_METRICS]: { status: statusM },
    [constants.CATEGORY_TYPE_BUILD]: { status: statusB },
    [constants.CATEGORY_TYPE_UNIT_TEST]: { status: statusUT, failed: failedUT },
    [constants.CATEGORY_TYPE_FUNCTIONAL_TEST]: { status: statusFT, failed: failedFT },
}) => {
    if (statusM === constants.CATEGORY_STATUS_FAILED) {
        return 'Metrics Reduction';
    }
    if (statusB === constants.CATEGORY_STATUS_FAILED) {
        return 'Build Failed';
    }
    if (statusUT === constants.CATEGORY_STATUS_FAILED) {
        return `${ failedUT } Unit Test${ failedUT === 1 ? '' : 's' } Failed`;
    }
    if (statusFT === constants.CATEGORY_STATUS_FAILED) {
        return `${ failedFT } Unit Test${ failedFT === 1 ? '' : 's' } Failed`;
    }
};

const getSummary = item => {
    const { state } = item;

    switch (state) {
        case constants.ITEM_STATE_ACCEPTED:
            return (
                <div className={ styles.boxAccepted }>
                    <div className={ styles.header }>Result:</div>
                    <div className={ styles.content }>
                        <div className={ styles.boxAcceptedContent }>
                            <div className={ styles.boxAcceptedSmallText }>
                                Change Accepted
                            </div>
                            <div className={ styles.boxAcceptedBigText }>
                                Auto-Merged
                            </div>
                        </div>
                        <div className={ styles.boxAcceptedFooter }>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="search" /> Merged Build
                            </Button>
                        </div>
                    </div>
                </div>
            );
        case constants.ITEM_STATE_COMPLETE:
            return (
                <div className={ styles.boxAccepted }>
                    <div className={ styles.header }>Result:</div>
                    <div className={ styles.content }>
                        <div className={ styles.boxCompleteContent }>
                            <div className={ styles.boxCompleteBigText }>
                                Complete
                            </div>
                        </div>
                        <div className={ styles.boxCompleteFooter }>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="export" /> Deploy
                            </Button>
                            <span>to:</span>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="production">Production</option>
                                <option value="staging">Staging</option>
                            </FormControl>
                        </div>
                    </div>
                </div>
            );
        case constants.ITEM_STATE_REJECTED:
            return (
                <div className={ styles.boxRejected }>
                    <div className={ styles.header }>Result:</div>
                    <div className={ styles.content }>
                        <div className={ styles.boxRejectedContent }>
                            <div className={ styles.boxRejectedSmallText }>
                                Change Rejected
                            </div>
                            <div className={ styles.boxRejectedBigText }>
                                { getFailReason(item) }
                            </div>
                        </div>
                        <div className={ styles.boxRejectedFooter }>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="wrench" /> Find Issues
                            </Button>
                        </div>
                    </div>
                </div>
            );
        case constants.ITEM_STATE_FAILED:
            return (
                <div className={ styles.boxFailed }>
                    <div className={ styles.header }>Result:</div>
                    <div className={ styles.content }>
                        <div className={ styles.boxFailedContent }>
                            <div className={ styles.boxFailedBigText }>
                                { getFailReason(item) }
                            </div>
                        </div>
                        <div className={ styles.boxFailedFooter }>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="search" /> Show Tests Result
                            </Button>
                        </div>
                    </div>
                </div>
            );
    }
};

const SummaryDetailsBox = ({
    item
}) => (
    <div className={ styles.boxWrapper }>
        { getSummary(item) }
    </div>
);

SummaryDetailsBox.propTypes = {
    item: itemPropType.isRequired
};

export default SummaryDetailsBox;
