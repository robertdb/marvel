import { API, ts, apikey, hash } from '../settings/setting';
const axios = require('axios');

export const fetchCharacters = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        let res = await axios.get(`${API}characters?limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`, config);
        let data = await res.data;
        return data;
    } catch (e) {
        throw e;
    }
}