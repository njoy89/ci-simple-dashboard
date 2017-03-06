import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import moment from 'moment';
import itemPropType from './../../utils/itemPropType';
import { actions } from '../../../actions';
import styles from './TableItemSummary.scss';
import CategoryBox from './CategoryBox';
import constants from '../../../../shared/constants';

const formatDate = date => {
    const dateM = moment(date);
    return dateM.isValid()
        ? dateM.format('MM/DD/YYYY h:mma')
        : null;
};

const getTypeIcon = type => {
    switch (type ) {
        case constants.ITEM_TYPE_BUILD:
            return (
                <i className="fa fa-desktop" />
            );
        case constants.ITEM_TYPE_FIREWALL:
            return (
                <i className="fa fa-building" />
            );
        default:
            return null;
    }
};

const isNotPending = state => state !== constants.ITEM_STATE_PENDING;

export const TableItemSummary = ({
    item: {
        id,
        type,
        owner,
        time_started,
        state,
        metrics,
        build,
        u_tests,
        f_tests
    },
    isCollapsed,
    collapseItem
}) => (
    <tr
        className={ classnames({
            [styles.rowClickable]: isNotPending(state)
        }) }
        onClick={ () => {
            if (isNotPending(state)) {
                collapseItem(id);
            }
        } }
    >
        <td
            className={ classnames({
                [styles.firstCell]: true,
                [styles.highlightedCell]: isCollapsed
            }) }
        >
            { getTypeIcon(type) }
            <span>{ id }</span>
        </td>
        <td>{ owner }</td>
        <td>{ formatDate(time_started) }</td>
        <td className="text-capitalize">{ state }</td>
        <CategoryBox category={ metrics } isCollapsed={ isCollapsed } />
        <CategoryBox category={ build } isCollapsed={ isCollapsed } />
        <CategoryBox category={ u_tests } isCollapsed={ isCollapsed } />
        <CategoryBox category={ f_tests } isCollapsed={ isCollapsed } />
    </tr>
);

TableItemSummary.propTypes = {
    item: itemPropType.isRequired,
    isCollapsed: React.PropTypes.bool.isRequired
};

export default connect(
    null,
    { collapseItem: actions.collapseItem }
)(TableItemSummary);
