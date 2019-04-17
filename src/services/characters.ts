import { API, ts, apikey, hash } from '../settings/setting';
const axios = require('axios');

export const fetchCharacters = async (value: string) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let name = value? value: 'Hulk';
    try {
        let res = await axios.get(`${API}characters?&nameStartsWith=${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`, config);
        let data = await res.data;
        return data;
    } catch (e) {
        throw e;
    }
}