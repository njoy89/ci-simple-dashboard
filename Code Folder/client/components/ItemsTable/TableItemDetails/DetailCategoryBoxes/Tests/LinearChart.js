import React from 'react';
import classnames from 'classnames';
import styles from './LinearChart.scss';

const LinearChart = ({ value }) => (
    <div className={ styles.linearChart }>
        <div className={ styles.outerChart }>
            <div
                className={ styles.innerChart }
                style={ {
                    width: `${value}%`
                } }
            />
        </div>
        <div className={ styles.text }>
            <div
                className={ classnames({
                    [styles.textGood]: value >= 70,
                    [styles.textAvg]: value < 70
                }) }
            >{ value }%</div>
            <div className={ styles.smallText }>code covered</div>
        </div>
    </div>
);

LinearChart.propTypes = {
    value: React.PropTypes.number.isRequired
};

export default LinearChart;
