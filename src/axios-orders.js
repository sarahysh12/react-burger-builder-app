import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-d8a0a.firebaseio.com/'
});

export default instance;