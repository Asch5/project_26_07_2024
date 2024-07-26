import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const HomePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        apiService.getSampleData().then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default HomePage;
