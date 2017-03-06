import React from 'react';
import DetailsBox from './../DetailsBox';
import { FunctionalTestsCategoryPropTypes } from './../../../../utils/itemPropType';
import TestDetailBox from './TestDetailBox';
import constants from '../../../../../../shared/constants';

const FunctionalTestsDetailBox = ({
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
            type={ constants.CATEGORY_TYPE_FUNCTIONAL_TEST }
            passed={ passed }
            skipped={ skipped }
            failed={ failed }
            coverage={ coverage }
            onClick={ onClick }
        />
    </DetailsBox>
);

FunctionalTestsDetailBox.propTypes = {
    data: FunctionalTestsCategoryPropTypes,
    onClick: React.PropTypes.func.isRequired
};

export default FunctionalTestsDetailBox;
