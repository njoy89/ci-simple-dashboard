import React from 'react';
import classnames from 'classnames';
import { MetricsStatPropType } from '../../../../utils/itemPropType';
import styles from './MetricsDetailBox.scss';
import constants from '../../../../../../shared/constants';

const mappingArrowIconWrapper = {
    [constants.METRICS_REL_PLUS]: styles.statBoxArrowUp,
    [constants.METRICS_REL_EQUAL]: styles.statBoxArrowEq,
    [constants.METRICS_REL_MINUS]: styles.statBoxArrowDown
};

const mappingArrowIcon = {
    [constants.METRICS_REL_PLUS]: 'fa-arrow-up',
    [constants.METRICS_REL_EQUAL]: 'fa-arrow-right',
    [constants.METRICS_REL_MINUS]: 'fa-arrow-down'
};

const MetricsDetailBoxStat = ({
    stat: {
        value,
        rel
    },
    name
}) => (
    <div className={ styles.statBox }>
        <div className={ classnames(styles.statBoxArrow, mappingArrowIconWrapper[rel]) }>
            <i className={ classnames('fa', mappingArrowIcon[rel]) } />
            <span>{ value }</span>
        </div>
        <div className={ styles.statBoxName }>
            { name }
        </div>
    </div>
);

MetricsDetailBoxStat.propTypes = {
    stat: MetricsStatPropType,
    name: React.PropTypes.string.isRequired
};

export default MetricsDetailBoxStat;
