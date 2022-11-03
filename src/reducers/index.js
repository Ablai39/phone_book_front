import updateLanguageList from './language-list';
import contactData from "./contact";

const reducer = (state, action) => {
    return {
        languageList: updateLanguageList(state, action),
        contactData: contactData(state, action)
    };
}

export default reducer;