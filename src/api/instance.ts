import axios, {AxiosInstance} from 'axios';
import {getBaseURL} from './constants';
import {getLocalStorage} from './asyncStorage/storage';
import {handleApiError} from '../redux/slice/authSlice/authSlice';
import {store} from '../redux/store/store';

const instance: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
});

instance.interceptors.request.use(
  async config => {
    //get token from localstorage
    const token = await getLocalStorage('token');
    if (token) {
      //set the token to request headers for authorization
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    //return data from response
    return response?.data;
  },
  error => {
    //Handle error response
    if (error?.response?.data) {
      store.dispatch(handleApiError(error?.response?.data));
      return Promise.reject(error?.response?.data);
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;
