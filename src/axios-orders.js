import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-acdaf.firebaseio.com/'
});

export default instance;