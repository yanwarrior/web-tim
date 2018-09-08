import BaseService from '@/components/services/BaseService'

export default class GuardService extends BaseService {
  constructor() {
    super()
  }

  tokenClear() {
    this.token = '';
    localStorage.removeItem('token');
  }

  isTokenAvailable() {
    if (this.token) {
      return true
    }

    return false
  }

  isTokenExpired(endpoint, to, from , next, redirectTo) {
    this.http.post(this.buildEndpoint(endpoint), {
      token: this.token
    }).then((resp) => {
      next()
    }).catch((err) => {
      this.tokenClear();
      next(redirectTo)
    });
  }

  static guardOn(to, from, next) {
    let guardService = new GuardService()
    if (guardService.isTokenAvailable()) {
      return guardService.isTokenExpired('/users/token-verify/', to, from, next, '/')
    } else {
      next('/')
    }
  }
  
}