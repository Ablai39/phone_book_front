import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStoreService } from '../hoc';
import { compose } from '../../utils';
import './page-footer.css';


const PageFooter =({ localeLang }) => {
    return (
        <Fragment>
            {/*<h1>Page Footer Lang - {localeLang}</h1>*/}
        </Fragment>
        
    );
}

const mapStateToProps = ({ localeLang }) => {
    return { localeLang };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return bindActionCreators({}, dispatch);
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PageFooter);