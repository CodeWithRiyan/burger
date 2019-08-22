import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-985b7.firebaseio.com/'
});

export default instance;