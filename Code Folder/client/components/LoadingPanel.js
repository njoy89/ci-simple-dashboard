import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { selectors } from '../reducers';
import styles from './LoadingPanel.scss';

const LoadingPanel = ({
    isLoading,
    error
}) => (
    <div className={ styles.panel }>
        <div
            className={ classnames({
                'fa fa-spinner fa-spin fa-3x fa-fw': true,
                invisible: !isLoading
            }) }
        />
        <div
            className={ classnames({
                [styles.loadingMessage]: true,
                invisible: !isLoading
            }) }
        >Synch...</div>
        <div
            className={ classnames({
                [styles.errorMessage]: true,
                invisible: !error
            }) }
        >
            <i className="fa fa-exclamation-circle" />
            <span>{ error }</span>
        </div>
    </div>
);

LoadingPanel.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string
};

const mapStateToProps = state => {
    const {
        isLoading,
        error
    } = selectors.getItems(state);
    return {
        isLoading,
        error
    };
};

export default connect(
    mapStateToProps
)(LoadingPanel);
