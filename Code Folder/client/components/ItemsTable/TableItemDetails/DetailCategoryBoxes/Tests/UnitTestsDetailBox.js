import React from 'react';
import DetailsBox from './../DetailsBox';
import { UnitTestsCategoryPropTypes } from './../../../../utils/itemPropType';
import TestDetailBox from './TestDetailBox';
import constants from '../../../../../../shared/constants';

const UnitTestsDetailBox = ({
    data: {
        status,
        progress,
        passed,
        skipped,
        failed,
        coverage
    },
    onClick
}) => (
    <DetailsBox
        status={ status }
        progress={ progress }
    >
        <TestDetailBox
            type={ constants.CATEGORY_TYPE_UNIT_TEST }
            passed={ passed }
            skipped={ skipped }
            failed={ failed }
            coverage={ coverage }
            onClick={ onClick }
        />
    </DetailsBox>
);

UnitTestsDetailBox.propTypes = {
    data: UnitTestsCategoryPropTypes,
    onClick: React.PropTypes.func.isRequired
};

export default UnitTestsDetailBox;
