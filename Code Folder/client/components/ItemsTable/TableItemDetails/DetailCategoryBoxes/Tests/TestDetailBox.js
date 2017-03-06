import React from 'react';
import classnames from 'classnames';
import constants from '../../../../../../shared/constants';
import styles from './TestDetailBox.scss';
import LinearChart from './LinearChart';
import {
    PieChart,
    Pie
} from 'recharts';

const getHeader = type => {
    switch (type) {
        case constants.CATEGORY_TYPE_UNIT_TEST:
            return 'Unit Test';
        case constants.CATEGORY_TYPE_FUNCTIONAL_TEST:
            return 'Functional Test';
    }
};

const TestDetailBox = ({
    type,
    passed,
    skipped,
    failed,
    coverage,
    onClick
}) => {
    const denominator = passed + skipped + failed;
    const percentage = denominator === 0
        ? 0
        : Math.round((passed / denominator) * 100);
    const pieChartData = [
        { name: 'Passed', value: passed, fill: '#72ac4d' },
        { name: 'Skipped', value: skipped, fill: '#eb7d3b' },
        { name: 'Failed', value: failed, fill: '#be0712' }
    ];

    if (denominator === 0) {
        // hack: if all values are 0, the pie chart won't be displayed
        pieChartData[1].value = 1;
    }

    return (
        <div
            className={ styles.box }
            onClick={ onClick }
        >
            <div className={ styles.header }>{ getHeader(type) }</div>
            <div className={ styles.testStats }>
                <div className={ styles.chart }>
                    <PieChart width={ 80 } height={ 80 }>
                        <Pie
                            startAngle={ 45 }
                            endAngle={ 405 }
                            data={ pieChartData }
                            fill="#8884d8"
                            outerRadius={ 40 }
                        />
                    </PieChart>
                </div>
                <div className={ styles.figures }>
                    <div
                        className={ classnames({
                            [styles.figure]: true,
                            [styles.figureFailed]: failed > 0,
                            [styles.figureGood]: failed === 0 && percentage >= 70,
                            [styles.figureAvg]: failed === 0 && percentage < 70
                        }) }
                    >
                        { percentage }%
                    </div>
                    <div className={ styles.figureText }>
                        tests passed
                    </div>
                </div>
            </div>
            <div className={ styles.footer }>
                <LinearChart
                    value={ coverage }
                />
            </div>
        </div>
    );
};

TestDetailBox.propTypes = {
    type: React.PropTypes.string.isRequired,
    passed: React.PropTypes.number,
    skipped: React.PropTypes.number,
    failed: React.PropTypes.number,
    coverage: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired
};

export default TestDetailBox;
