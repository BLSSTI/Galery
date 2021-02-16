import axios from 'axios';

const api = axios.create({
    baseURL: 'apidev.inema.ba.gov.br/participante',
});

export default api;