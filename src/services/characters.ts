import { API } from '../settings/setting';
const axios = require('axios');

const ts = '61781402';
const apikey = 'e76320ce4b68d79d3a6d8854016aecc4';
const hash = '8166a944e9a09d37c9ca77e1b67479ea';

export const fetchCharacters = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        let res = await axios.get(`${API}comics?ts=${ts}&apikey=${apikey}&hash=${hash}`, config);
        let data = await res.data;
        return data;
    } catch (e) {
        throw e;
    }
}