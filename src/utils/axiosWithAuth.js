import axios from 'axios';

const axiosWithAuth = () => {
    // get token
    const token = localStorage.getItem('token');

    // return an instance of axios
    return axios.create({
        baseURL: 'https://art-po-bw.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;