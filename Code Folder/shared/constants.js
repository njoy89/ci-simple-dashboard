export default {
    CATEGORY_TYPE_METRICS: 'metrics',
    CATEGORY_TYPE_BUILD: 'build',
    CATEGORY_TYPE_UNIT_TEST: 'u_tests',
    CATEGORY_TYPE_FUNCTIONAL_TEST: 'f_tests',

    CATEGORY_STATUS_IN_PROGRESS: 'in_progress',
    CATEGORY_STATUS_SUCCESS: 'success',
    CATEGORY_STATUS_FAILED: 'failed',
    CATEGORY_STATUS_SKIPPED: 'skipped',

    ITEM_STATE_PENDING: 'pending',
    ITEM_STATE_RUNNING: 'running',

    ITEM_STATE_COMPLETE: 'complete', // build
    ITEM_STATE_ACCEPTED: 'accepted', // firewall

    ITEM_STATE_FAILED: 'failed', // build
    ITEM_STATE_REJECTED: 'rejected', // firewall

    ITEM_TYPE_FIREWALL: 'firewall',
    ITEM_TYPE_BUILD: 'build',

    METRICS_CATEGORY_STAT_TEST: 'test',
    METRICS_CATEGORY_STAT_MAINTAINABILITY: 'maintainability',
    METRICS_CATEGORY_STAT_SECURITY: 'security',
    METRICS_CATEGORY_STAT_WORKMANSHIP: 'workmanship',

    METRICS_REL_PLUS: '+',
    METRICS_REL_EQUAL: '=',
    METRICS_REL_MINUS: '-',

    BUILD_DEBUG_TYPE: 'debug',
    BUILD_RELEASE_TYPE: 'release'
};
