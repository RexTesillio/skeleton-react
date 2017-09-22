import request from '../utils/request';

export const getServerMessage = () => {
    return request({
        url: '/v3/hello'
    });
};