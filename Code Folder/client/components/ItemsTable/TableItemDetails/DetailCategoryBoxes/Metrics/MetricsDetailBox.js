import React from 'react';
import DetailsBox from './../DetailsBox';
import MetricsDetailBoxStat from './MetricsDetailBoxStat';
import { MetricsCategoryPropType } from './../../../../utils/itemPropType';
import styles from './MetricsDetailBox.scss';
import constants from '../../../../../../shared/constants';

const MetricsDetailBox = ({
    data,
    onClick
}) => (
    <DetailsBox
        status={ data.status }
        progress={ data.progress }
    >
        <div
            className={ styles.box }
            onClick={ onClick }
        >
            <div className={ styles.header }>Metrics</div>
            <div className={ styles.stats }>
                <MetricsDetailBoxStat
                    stat={ data[constants.METRICS_CATEGORY_STAT_TEST] }
                    name={ constants.METRICS_CATEGORY_STAT_TEST }
                />
                <MetricsDetailBoxStat
                    stat={ data[constants.METRICS_CATEGORY_STAT_MAINTAINABILITY] }
                    name={ constants.METRICS_CATEGORY_STAT_MAINTAINABILITY }
                />
                <MetricsDetailBoxStat
                    stat={ data[constants.METRICS_CATEGORY_STAT_SECURITY] }
                    name={ constants.METRICS_CATEGORY_STAT_SECURITY }
                />
                <MetricsDetailBoxStat
                    stat={ data[constants.METRICS_CATEGORY_STAT_WORKMANSHIP] }
                    name={ constants.METRICS_CATEGORY_STAT_WORKMANSHIP }
                />
            </div>
        </div>
    </DetailsBox>
);

MetricsDetailBox.propTypes = {
    data: MetricsCategoryPropType,
    onClick: React.PropTypes.func.isRequired
};

export default MetricsDetailBox;
