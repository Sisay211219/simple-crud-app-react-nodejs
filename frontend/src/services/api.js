import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:9000/',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;
