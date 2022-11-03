import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {ListGroup} from "reactstrap";
import PhoneContact from "./phone-contact";
import {connect} from "react-redux";
import {withStoreService} from "../hoc";
import {bindActionCreators, compose} from "redux";
import {fetchContact} from "../../actions";

const HomePage = ({contactData, onFetchContact}) => {

    useEffect(()=> {
        // onFetchContact();
    })

    return (
            <Container className='all-contacts'>
                <Row>
                    <Col className='phone-contact-field'>
                        <h3 className='phone-contacts'>Контакты</h3>
                        <div>
                            <Button color="primary">+ Добавить</Button>
                        </div>
                    </Col>
                </Row>
                <ListGroup>
                    <PhoneContact/>
                    <PhoneContact/>
                    <PhoneContact/>
                    <PhoneContact/>
                    <PhoneContact/>
                </ListGroup>
            </Container>
    );
}

const mapStateToProps = ({contactData}) => {
    return {contactData};
};

const mapDispatchToProps = (dispatch, {storeService}) => {
    return bindActionCreators({
        onFetchContact: fetchContact(storeService),
    }, dispatch);
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
