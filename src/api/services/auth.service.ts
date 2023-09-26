import {USER_LOGIN} from '../constants';
import {http} from '../http';

class authDataService {
  login(data: object) {
    return http.post(USER_LOGIN, data);
  }
}

export default new authDataService();
