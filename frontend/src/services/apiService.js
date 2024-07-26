import axios from 'axios';

const apiService = {
    getSampleData: () => {
        return axios.get('/api/sample');
    },
};

export default apiService;
