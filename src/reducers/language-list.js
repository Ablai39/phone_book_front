const updateLanguageList = (state, action) => {
    if (state === undefined) {
        const data = [
            {
                id: 1,
                code: 'kz',
                name: 'Қазақша',
                icon: '',
                position: 10,
                is_active: false
            },
            {
                id: 2,
                code: 'ru',
                name: 'Русский',
                icon: '',
                position: 20,
                is_active: true
            },
            {
                id: 3,
                code: 'en',
                name: 'English',
                icon: '',
                position: 30,
                is_active: false
            },
        ];

        return {
            languages: data,
            loading: false,
            error: null,
        }
    }

    const setDefaultLanguage = (state, languageId) => {
        const { languageList } = state;
        const newItems = languageList.languages.map((item) => {
            if (item.id === languageId) {
                item.is_active = true
            }
            else {
                item.is_active = false
            }

            return item
        })
        
        return { ...languageList, languages: newItems }
    }

    switch (action.type) {
        case 'SET_DEFAULT_LANGUAGE':
            return setDefaultLanguage(state, action.payload);
        default:
            return state.languageList;
    }
}

export default updateLanguageList;