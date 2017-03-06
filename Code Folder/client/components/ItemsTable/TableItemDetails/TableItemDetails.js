import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import itemPropType from './../../utils/itemPropType';
import { actions } from '../../../actions';

import MetricsDetailBox from './DetailCategoryBoxes/Metrics/MetricsDetailBox';
import BuildDetailBox from './DetailCategoryBoxes/Build/BuildDetailBox';
import UnitTestsDetailBox from './DetailCategoryBoxes/Tests/UnitTestsDetailBox';
import FunctionalTestsDetailBox from './DetailCategoryBoxes/Tests/FunctionalTestsDetailBox';
import SummaryDetailsBox from './SummaryDetailsBox';

import constants from '../../../../shared/constants';
import styles from './TableItemDetails.scss';

export const TableItemDetails = ({
    show,
    item,
    showCategoryModal
}) => {
    const onClick = categoryType => showCategoryModal({
        itemId: item.id,
        categoryType
    });

    return (
        <tr className={ classnames({ hidden: !show }) }>
            <td
                className={ styles.detailsPanelTd }
                colSpan="8"
            >
                <div className={ styles.row }>
                    <MetricsDetailBox
                        data={ item[constants.CATEGORY_TYPE_METRICS] }
                        onClick={ () => onClick(constants.CATEGORY_TYPE_METRICS) }
                    />
                    <BuildDetailBox
                        data={ item[constants.CATEGORY_TYPE_BUILD] }
                        onClick={ () => onClick(constants.CATEGORY_TYPE_BUILD) }
                    />
                    <UnitTestsDetailBox
                        data={ item[constants.CATEGORY_TYPE_UNIT_TEST] }
                        onClick={ () => onClick(constants.CATEGORY_TYPE_UNIT_TEST) }
                    />
                    <FunctionalTestsDetailBox
                        data={ item[constants.CATEGORY_TYPE_FUNCTIONAL_TEST] }
                        onClick={ () => onClick(constants.CATEGORY_TYPE_FUNCTIONAL_TEST) }
                    />
                    <SummaryDetailsBox
                        item={ item }
                    />
                </div>
            </td>
        </tr>
    );
};

TableItemDetails.propTypes = {
    show: React.PropTypes.bool.isRequired,
    item: itemPropType.isRequired
};

export default connect(
    null,
    { showCategoryModal: actions.showCategoryModal }
)(TableItemDetails);
