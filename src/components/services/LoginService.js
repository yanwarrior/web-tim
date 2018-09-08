import BaseService from './BaseService';


class LoginService extends BaseService {
  constructor() {
    super();
  }

  login(endpoint, data) {
    return this.http.post(this.buildEndpoint(endpoint), data)
               .then((resp) => resp)
               .catch((err) => console.log(err));
  }
}

export default LoginService;