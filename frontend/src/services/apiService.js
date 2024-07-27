import axios from 'axios';

const apiService = {
    getSampleData: () => {
        return axios.get('http://localhost:5000/api');
    },
};

export default apiService;
