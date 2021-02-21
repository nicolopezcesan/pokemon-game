import axios from 'axios';

export const axiosInstance = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}