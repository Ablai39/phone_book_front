import React from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withStoreService} from '../hoc';
import {compose} from '../../utils';
import './page-header.css';


const PageHeader = ({urlLang}) => {
    return (
        <div className="header">
            <Container>
                <div><i className="fa fa-address-book" aria-hidden="true"></i><h1 className='name-of-app'>Телефонная
                    книга</h1></div>
            </Container>
        </div>
    );
};

const mapStateToProps = ({urlLang}) => {
    return {urlLang};
};

const mapDispatchToProps = (dispatch, {storeService}) => {
    return bindActionCreators({}, dispatch);
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PageHeader);