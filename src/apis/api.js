import axios from 'axios'

const api = axios.create({
  baseURL: 'https://61b9880a38f69a0017ce609b.mockapi.io/'
});

export default api