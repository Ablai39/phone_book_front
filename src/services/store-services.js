import axios from 'axios';
export default class StoreService {

    getContact = async () => {
        // const response = await axios.get(`${CONTENT_BACKEND}/news/getTopNewsByTag/annonce`);
        // return response.data;

        const data = [
            {
                id: 1,
                code: 'kz',
                name: 'kz',
                position: 10,
                is_active: false
            },
            {
                id: 2,
                code: 'ru',
                name: 'ru',
                position: 20,
                is_active: true
            },
            {
                id: 3,
                code: 'en',
                name: 'en',
                position: 30,
                is_active: false
            },
        ];

        return data
    };

}