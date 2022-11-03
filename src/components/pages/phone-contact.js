import React from 'react';
import {ListGroupItem} from "reactstrap";
import {Button} from "react-bootstrap";

const PhoneContact = (props) => {
    return (
        <ListGroupItem>
            <div className='contact-name-surname'>
                <h4>Аблай Аблай</h4>
                <i className="fa fa-phone" aria-hidden="true"></i><h6 className='contact-number'>87753998081</h6>
            </div>
            <Button color="danger" className='remove-contact' onClick={props.removeContact}><i className="fa fa-trash" aria-hidden="true"></i></Button>{' '}
        </ListGroupItem>
    );
}

export default PhoneContact;
