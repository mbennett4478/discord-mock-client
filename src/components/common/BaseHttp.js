import axios from 'axios';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';
// const baseurl = process.env.REACT_APP_API_ENDPOINT;
const baseurl = 'http://localhost:4000/api/v1';

export default class BaseHttp {
    static async get(url, params) {
        try {
            params = params ? snakeCaseKeys(params) : {};
            const res = await axios.get(baseurl + url, { params });
            return camelCaseKeys(res.data);
        } catch (error) {
            throw error;
        }
    }

    static async post(url, data) {
        try {
            data = snakeCaseKeys(data);
            const res = await axios.post(baseurl + url, { ...data });
            return camelCaseKeys(res.data);
        } catch (error) {
            throw error;
        }
    }
}