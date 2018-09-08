import BaseService from '@/components/services/BaseService';

class CategoryService extends BaseService {
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
      console.log(err);
    })
  }
}

export default CategoryService;