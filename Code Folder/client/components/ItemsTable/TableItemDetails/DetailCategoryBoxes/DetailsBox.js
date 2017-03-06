import React from 'react';
import classnames from 'classnames';
import styles from './DetailsBox.scss';
import constants from '../../../../../shared/constants';

const getBoxContent = (
    children,
    status,
    progress
) => {
    switch (status) {
        case constants.CATEGORY_STATUS_SKIPPED:
            return (
                <div className={ styles.boxSkippedContent }>
                    Skipped
                </div>
            );
        case constants.CATEGORY_STATUS_IN_PROGRESS:
            return (
                <div className={ styles.boxInProgressContent }>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
                    <div className={ styles.progressNumber }>
                        { progress || 0 }%
                    </div>
                </div>
            );
        default:
            return children;
    }
};

const DetailsBox = ({
    children,
    status,
    progress
}) => (
    <div className={ styles.boxWrapper }>
        <div className={ classnames({
            [styles.boxInProgress]: status === constants.CATEGORY_STATUS_IN_PROGRESS,
            [styles.boxSuccess]: status === constants.CATEGORY_STATUS_SUCCESS,
            [styles.boxFailed]: status === constants.CATEGORY_STATUS_FAILED,
            [styles.boxSkipped]: status === constants.CATEGORY_STATUS_SKIPPED
        }) }>
            { getBoxContent(children, status, progress) }
        </div>
    </div>
);

DetailsBox.propTypes = {
    children: React.PropTypes.node.isRequired,
    status: React.PropTypes.string.isRequired,
    progress: React.PropTypes.number
};

export default DetailsBox;
