export const emptyState = {
    items: {
        isLoading: false,
        error: null,
        data: []
    },
    collapsedItem: {
        itemId: null,
        collapsed: false
    },
    modal: {
        itemId: null,
        categoryType: null,
        show: false
    }
};

export const item = {
    "id": "432459",
    "type": "firewall",
    "owner": "samy",
    "time_started": "2014-04-16T06:43:10+00:00",
    "state": "accepted",
    "metrics": {
        "status": "success",
        "test": { "value": 64, "rel": "+" },
        "maintainability": { "value": 53, "rel": "+" },
        "security": { "value": 64, "rel": "=" },
        "workmanship": { "value": 72, "rel": "=" }
    },
    "build": {
        "status": "success",
        "debug": true,
        "release": true,
        "timestamp": "2014-04-17T10:46:00+00:00"
    },
    "u_tests": {
        "status": "success",
        "passed": 142,
        "skipped": 10,
        "failed": 0,
        "coverage": 76
    },
    "f_tests": {
        "status": "success",
        "passed": 4321,
        "skipped": 2145,
        "failed": 0,
        "coverage": 23
    }
};
