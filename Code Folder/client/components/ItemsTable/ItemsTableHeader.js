import React from 'react';
import styles from './ItemsTableHeader.scss';

const ItemsTableHeader = () => (
    <thead className={ styles.header }>
        <tr>
            <th className={ `text-left ${ styles.firstColumn }` }>Changelist / Build</th>
            <th>Owner</th>
            <th>Time Started</th>
            <th>State</th>
            <th className={ styles.headerCategoryColumn }>Metrics</th>
            <th className={ styles.headerCategoryColumn }>Build</th>
            <th className={ styles.headerCategoryColumn }>Unit Test</th>
            <th className={ styles.headerCategoryColumn }>Functional Test</th>
        </tr>
    </thead>
);

export default ItemsTableHeader;
