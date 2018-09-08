import axios from 'axios'


export default class BaseService {
  http = axios;
  bearer = 'JWT';
  token = '';
  baseURL = 'http://localhost:8000';

  constructor() {
    this.setToken();
    this.setHeader();
  }

  setHeader() {
    this.http.defaults.headers.common['Authorization'] = `${this.bearer} ${this.token}`
  }

  setToken() {
    let token = localStorage.getItem('token');
    this.token = token;
  }

  buildEndpoint(endpoint) {
    return `${this.baseURL}${endpoint}`;
  }
}
