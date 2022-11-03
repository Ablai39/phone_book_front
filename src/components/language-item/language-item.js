import React from 'react';
import { Image } from 'react-bootstrap';
import './language-item.css';

const LanguageItem = ({ language, onSetDefault }) => {
    const { name, icon } = language;
    return (
        <div className="language-item">
            <div className="language-cover">
            
            </div>
            <div className="language-details">
                <div className="language-name"><Image src={icon}/> {name}</div>
                <button type="button" onClick={onSetDefault} className="btn btn-primary add-to-cart">Set Default</button>
            </div>
        </div>
    );
}

export default LanguageItem;