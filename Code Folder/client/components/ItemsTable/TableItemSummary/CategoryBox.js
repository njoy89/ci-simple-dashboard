import React from 'react';
import classnames from 'classnames';
import constants from '../../../../shared/constants';
import styles from './CategoryBox.scss';

const getInnerBox = (status, progress) => {
    switch (status) {
        case constants.CATEGORY_STATUS_IN_PROGRESS:
            return (
                <div
                    className={ styles.innerInProgressBox }
                    style={ { width: progress + '%' } }
                />
            );
        case constants.CATEGORY_STATUS_SUCCESS:
            return (<div className={ styles.innerSuccessBox } />);
        case constants.CATEGORY_STATUS_SKIPPED:
            return (<div className={ styles.innerSkippedBox } />);
        case constants.CATEGORY_STATUS_FAILED:
            return (<div className={ styles.innerFailedBox } />);
    }
};

const Category = ({
    category: { status, progress = 0 },
    isCollapsed
}) => (
    <td>
        <div className={ classnames({
            [styles.box]: true,
            invisible: isCollapsed
        }) }>
            { getInnerBox(status, progress) }
        </div>
    </td>
);

Category.propTypes = {
    category: React.PropTypes.shape({
        status: React.PropTypes.string.isRequired,
        progress: React.PropTypes.number
    }).isRequired,
    isCollapsed: React.PropTypes.bool.isRequired
};

export default Category;