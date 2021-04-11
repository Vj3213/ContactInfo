import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vj3213.github.io/json/',
    headers: { Accept: 'application/json' }
})

export default (url, callback) => {
    api
        .get(url)
        .then(resp => callback(resp))
}