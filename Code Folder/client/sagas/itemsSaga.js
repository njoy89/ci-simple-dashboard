import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { actions, types } from '../actions';

// pull new data every 3 seconds
const REFRESH_INTERVAL_LENGTH = 3000;

export function *singleRequest(id) {
    yield put(actions.loadItemsRequest());

    let response = null;
    let result = null;
    try {
        response = yield call(
            fetch,
            '/api/items?id=' + id,
            {
                credentials: 'same-origin'
            }
        );

        // simulate network latency
        yield delay(1000);

        if (response.status >= 300) {
            yield put(actions.loadItemsError(response.statusText));
            return;
        }

        result = yield call(
            response.json.bind(response)
        );
    }
    catch (err) {
        yield put(actions.loadItemsError(err));
        return;
    }

    if (result) {
        yield put(actions.loadItemsSuccess(result));
    }
}

export function* loadItems() {
    // pull data from backend
    let id = 1;
    while (true) {
        yield singleRequest(id);
        yield delay(REFRESH_INTERVAL_LENGTH);
        ++id;
    }
}

export default function* () {
    yield takeLatest(types.loadItems, loadItems);
}
