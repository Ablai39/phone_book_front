const config = (function () {
    switch (process.env.REACT_APP_CONFIG) {
        case "test":
            return {
                CONTENT_BACKEND: 'https://test.jusan.kz:8476/back/',
            }; 
        case "prod":
            return {
                CONTENT_BACKEND: 'https://jusan.kz/back/',
            }
        case "dev":
        default:
            return {
                CONTENT_BACKEND: 'http://localhost:4223/'
            };
    }
})();

export const { CONTENT_BACKEND } = config;