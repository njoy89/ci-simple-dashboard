import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { selectors } from '../../reducers';
import TableItemSummary from './TableItemSummary/TableItemSummary';
import TableItemDetails from './TableItemDetails/TableItemDetails';

import styles from './TableItem.scss';
import itemPropType from './../utils/itemPropType';
import constants from '../../../shared/constants';

const classNameMapping = {
    [constants.ITEM_STATE_PENDING]: styles.pending,
    [constants.ITEM_STATE_RUNNING]: styles.running,

    [constants.ITEM_STATE_COMPLETE]: styles.success,
    [constants.ITEM_STATE_ACCEPTED]: styles.success,

    [constants.ITEM_STATE_FAILED]: styles.fail,
    [constants.ITEM_STATE_REJECTED]: styles.rejected
};

const TableItem = ({
    item,
    isCollapsed
}) => {
    return (
        <tbody
            className={ classNameMapping[item.state] }
        >
            <TableItemSummary
                item={ item }
                isCollapsed={ isCollapsed }
            />
            <TableItemDetails
                item={ item }
                show={ isCollapsed }
            />
        </tbody>
    );
};

TableItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    item: itemPropType,
    isCollapsed: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state, { id }) => ({
    item: selectors.getItemById(state, id),
    isCollapsed: selectors.isCollapsed(state, id)
});

export default connect(
    mapStateToProps
)(TableItem);
