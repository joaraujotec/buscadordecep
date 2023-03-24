import axios from "axios";
// http://viacep.com.br/ws/ minha base URL que nao muda     
//01310930/json , esta parte muda dependendo do que for inserido
const api = axios.create({
    baseURL:"http://viacep.com.br/ws/"
});
export default api;