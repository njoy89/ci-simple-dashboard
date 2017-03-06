import React from 'react';
import { connect } from 'react-redux';
import {
    Modal,
    Button
} from 'react-bootstrap';
import { actions } from '../actions';
import { selectors } from '../reducers';
import itemPropType from './utils/itemPropType';
import constants from '../../shared/constants';

const mapping = {
    [constants.CATEGORY_TYPE_METRICS]: 'Metrics',
    [constants.CATEGORY_TYPE_BUILD]: 'Build',
    [constants.CATEGORY_TYPE_UNIT_TEST]: 'Unit Tests',
    [constants.CATEGORY_TYPE_FUNCTIONAL_TEST]: 'Functional Tests'
};

const modalBody = (item, categoryType) => {
    return (
        <Modal.Body>
            <h4>This is a modal that is related to the item with ID = { item.id }.</h4>
            <p>Specifically, it's related to <b>{ mapping[categoryType] }</b> section.</p>
        </Modal.Body>
    );
};

const CategoryDetailsModal = ({
    item,
    show,
    categoryType,
    closeCategoryModal
}) => (
    <Modal
        show={ show }
        onHide={ closeCategoryModal }
    >
        <Modal.Header closeButton>
            <Modal.Title>Item Category Details</Modal.Title>
        </Modal.Header>
        { item
            ? modalBody(item, categoryType)
            : null
        }
        <Modal.Footer>
            <Button
                onClick={ closeCategoryModal }
            >Close</Button>
        </Modal.Footer>
    </Modal>

);

CategoryDetailsModal.propTypes = {
    show: React.PropTypes.bool.isRequired,
    categoryType: React.PropTypes.string,
    item: itemPropType
};

const mapStateToProps = state => {
    const {
        itemId,
        categoryType,
        show
    } = selectors.getCategoryModal(state);
    const item = selectors.getItemById(state, itemId);

    return {
        item,
        categoryType,
        show
    };
};

export default connect(
    mapStateToProps,
    { closeCategoryModal: actions.closeCategoryModal }
)(CategoryDetailsModal);
