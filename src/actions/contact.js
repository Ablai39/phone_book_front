const contactLoaded = (newItems) => {
    return {
        type: 'FETCH_CONTACT_SUCCESS',
        payload: newItems
    };
};

const contactError = (error) => {
    return {
        type: 'FETCH_CONTACT_FAILURE',
        payload: error
    };
};


const fetchContact = (storeService) => () => (dispatch) => {
    storeService.getContact()
        .then((data) => dispatch(contactLoaded(data)))
        .catch((err) => dispatch(contactError(err)));
};

export {
    fetchContact,
};
