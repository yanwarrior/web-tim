import BaseService from '@/components/services/BaseService';

class ProductService extends BaseService {
  constructor() {
    super();
  }

  all(endpoint, params) {
    return this.http.get(this.buildEndpoint(endpoint), {
      params: params 
    })
    .then((resp) => {
      return resp
    })
    .catch((err) => {
      console.log(err)
    })
  }

  create(endpoint, params) {
    return this.http.post(this.buildEndpoint(endpoint), params)
    .then(resp => resp)
    .catch(err => console.log(err))
  }

  get(endpoint) {
    return this.http.get(this.buildEndpoint(endpoint))
    .then((resp) => {
      return resp
    })
    .catch((err) => {
      console.log(err)
    })
  }

  create(endpoint, params) {
    return this.http.post(this.buildEndpoint(endpoint), params)
      .then((resp) => {
        return resp
      })
      .catch((err) => {
        console.log(err)
      })
  }

  update(endpoint, params) {
    return this.http.put(this.buildEndpoint(endpoint), params)
    .then((resp) => {
      return resp
    })
    .catch((err) => {
      console.log(err)
    })
  }

  delete(endpoint) {
    return this.http.delete(this.buildEndpoint(endpoint))
    .then((resp) => resp)
    .catch((err) => console.log(err))
  }
}

export default ProductService;