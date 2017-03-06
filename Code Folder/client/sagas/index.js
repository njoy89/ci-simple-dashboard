import itemsSaga from './itemsSaga';

export default function* () {
    yield [
        itemsSaga()
    ];
};
