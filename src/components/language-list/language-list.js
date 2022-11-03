import React, { Component } from 'react';
import LanguageItem from '../language-item';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStoreService } from '../hoc';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import { useLocation } from 'react-router-dom';

import './language-list.css';

const LanguageList = ({ languages, onSetDefault, onSetLocalLanguage, onSetUrlLanguage }) => {
    const { pathname } = useLocation();

    const callChangeLanguage = (item) => {
        const { id, code } = item;
        onSetUrlLanguage({ code: code, address: pathname });
        onSetLocalLanguage(code);
        onSetDefault(id);
    }

    return (
        <ul className="languagelist">
            {
                languages.map((language) => {
                    return (
                        <li key={language.id}><LanguageItem onSetDefault={() => callChangeLanguage(language)} language={language} /></li>
                    );
                })
            }
        </ul>
    );
}

class LanguageListContainer extends Component {
    render() {
        const { languages, loading, error, onSetDefault, onSetLocalLanguage, onSetUrlLanguage } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <LanguageList languages={languages} onSetDefault={onSetDefault} onSetLocalLanguage={onSetLocalLanguage} onSetUrlLanguage={onSetUrlLanguage} />;
    }
}

const mapStateToProps = ({ languageList: { languages, loading, error } }) => {
    return { languages, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return bindActionCreators({
    }, dispatch);
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LanguageListContainer);