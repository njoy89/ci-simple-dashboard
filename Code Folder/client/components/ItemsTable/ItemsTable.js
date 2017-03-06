import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectors } from '../../reducers';

import ItemsTableHeader from './ItemsTableHeader';
import TableItem from './TableItem';
import TableSeparatorItem from './TableSeparatorItem';

import styles from './ItemsTable.scss';

const ItemsTable = ({ data }) => {
    const rows = _.flatten(_.map(data, row => [
        (
            <TableItem
                key={ `table-item-${ row.id }` }
                id={ row.id }
            />
        ),
        (
            <TableSeparatorItem
                key={ `table-separator-item-${ row.id }` }
            />
        )
    ]));

    return (
        <table className={ styles.itemsTable }>
            <ItemsTableHeader />
            { rows }
        </table>
    );
};

ItemsTable.propTypes = {
    data: React.PropTypes.array
};

const mapStateToProps = state => ({
    data: selectors.getItems(state).data
});

export default connect(
    mapStateToProps
)(ItemsTable);
