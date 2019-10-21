import axios from 'axios';

const axiosWithAuth = () => {
    // get token
    const token = localStorage.getItem('token');

    // return an instance of axios
    return axios.create({
        // *******BASEURL AND HEADERS NEED TO BE REPLACED*******
        baseURL: 'http://localhost:5000',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;