import React from 'react';
import styles from './TableSeparatorItem.scss';

const TableSeparatorItem = () => (
    <tbody className={ styles.separatorRow }>
        <tr>
            <td colSpan="8" />
        </tr>
    </tbody>
);

export default TableSeparatorItem;
