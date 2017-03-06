import React from 'react';
import moment from 'moment';
import DetailsBox from './../DetailsBox';
import BuildDetailBoxStat from './BuildDetailBoxStat';
import { BuildCategoryPropTypes } from './../../../../utils/itemPropType';
import styles from './BuildDetailBox.scss';
import constants from '../../../../../../shared/constants';

const formatDate = date => {
    const dateM = moment(date);
    return dateM.isValid()
        ? dateM.format('h:mma - M/DD/YYYY')
        : null;
};

const BuildDetailBox = ({
    data: {
        status,
        progress,
        debug,
        release,
        timestamp
    },
    onClick
}) => (
    <DetailsBox
        status={ status }
        progress={ progress }
    >
        <div
            className={ styles.box }
            onClick={ onClick }
        >
            <div className={ styles.header }>Build</div>
            <div className={ styles.buildStatuses }>
                <BuildDetailBoxStat
                    success={ debug }
                    type={ constants.BUILD_DEBUG_TYPE }
                />
                <BuildDetailBoxStat
                    success={ release }
                    type={ constants.BUILD_RELEASE_TYPE }
                />
            </div>
            <div className={ styles.footer }>{ formatDate(timestamp) }</div>
        </div>
    </DetailsBox>
);

BuildDetailBox.propTypes = {
    data: BuildCategoryPropTypes,
    onClick: React.PropTypes.func.isRequired
};

export default BuildDetailBox;
