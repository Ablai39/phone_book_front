const languageSetDefault = (languageId) => {
    return {
        type: 'SET_DEFAULT_LANGUAGE',
        payload: languageId
    };
};

export {
    languageSetDefault
};