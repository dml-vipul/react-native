import {DEFAULT_ENV, BASE_URL} from '@env';

export const getBaseURL = () => {
  if (DEFAULT_ENV === 'DEV') {
    return BASE_URL;
  }
};

export const USER_LOGIN = 'v1/user/login';
