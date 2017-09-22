import axios from 'axios';
//import appConst from './appConst';
//import { browserHistory } from 'react-router';

export default function request({ url, method = 'get', data }) {
    let config = {
        headers: {

        }
    };
    return axios({
        url,
        method,
        data,
        ...config
    }).then(response => {
        return response;
    }).catch(err => {
        if (err.response && err.response.data) {
            // if (error.response.data.code === appConst.responseCode.tokenExpired.detail.code) {
            //     return restore({ url, method, data });
            // } else if (error.response.data.code === appConst.responseCode.tokenInvalid.detail.code) {
            //     browserHistory.push('/login');
            //     throw error;
            // }
        }
        console.log(err);
        throw err;
    });
}