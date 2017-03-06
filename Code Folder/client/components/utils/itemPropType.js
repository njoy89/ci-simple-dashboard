import React from 'react';

export const MetricsStatPropType = React.PropTypes.shape({
    value: React.PropTypes.number.isRequired,
    rel: React.PropTypes.string.isRequied
});

export const MetricsCategoryPropType = React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    progress: React.PropTypes.number,

    test: MetricsStatPropType,
    maintainability: MetricsStatPropType,
    security: MetricsStatPropType,
    workmanship: MetricsStatPropType
}).isRequired;

export const BuildCategoryPropTypes = React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    progress: React.PropTypes.number,

    debug: React.PropTypes.bool,
    release: React.PropTypes.bool,
    timestamp: React.PropTypes.string
}).isRequired;

export const UnitTestsCategoryPropTypes = React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    progress: React.PropTypes.number,

    passed: React.PropTypes.number,
    skipped: React.PropTypes.number,
    failed: React.PropTypes.number,
    coverage: React.PropTypes.number
}).isRequired;

export const FunctionalTestsCategoryPropTypes = React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    progress: React.PropTypes.number,

    passed: React.PropTypes.number,
    skipped: React.PropTypes.number,
    failed: React.PropTypes.number,
    coverage: React.PropTypes.number
}).isRequired;

export default React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string,
    time_started: React.PropTypes.string,
    state: React.PropTypes.string.isRequired,
    metrics: MetricsCategoryPropType,
    build: BuildCategoryPropTypes,
    u_tests: UnitTestsCategoryPropTypes,
    f_tests: FunctionalTestsCategoryPropTypes
});
