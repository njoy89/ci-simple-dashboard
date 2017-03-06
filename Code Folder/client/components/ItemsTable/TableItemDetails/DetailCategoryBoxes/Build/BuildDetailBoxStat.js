import React from 'react';
import classnames from 'classnames';
import styles from './BuildDetailBox.scss';
import constants from '../../../../../../shared/constants';

const mapping = {
    [constants.BUILD_DEBUG_TYPE]: 'Build',
    [constants.BUILD_RELEASE_TYPE]: 'Release'
};

const BuildDetailBoxStat = ({
    success,
    type
}) => (
    <div className={ classnames({
        [styles.buildStatus]: true,
        [styles.buildStatusSuccess]: success
    }) }>
        <i className="fa fa-desktop" />
        <div>{ mapping[type] }</div>
    </div>
);

BuildDetailBoxStat.propTypes = {
    success: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired
};

export default BuildDetailBoxStat;
