const contactData = (state, action) => {
    if (state === undefined) {
        return {
            items: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_CONTACT_SUCCESS':
            return {
                items: action.payload,
                loading: false,
                error: null
            };
        default:
            return state.contactData;
    }
};

export default contactData;
