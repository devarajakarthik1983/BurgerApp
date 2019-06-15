import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bfe75.firebaseio.com/'
});

export default instance;