import {createSlice} from '@reduxjs/toolkit';

interface LoginPayload {
  loginType: string;
  role: string;
  email: string;
  password: string;
  deviceToken: string;
}

interface Error {
  message: string;
  code: number;
}

interface AuthSliceState {
  userLoginData: LoginPayload;
  isLoggedIn: boolean;
  loading: boolean;
  user: object | undefined;
  error: Error | {};
  apiError: {[x: string]: any} | undefined;
}

const initialState: AuthSliceState = {
  userLoginData: {
    loginType: 'EMAIL',
    role: 'U',
    email: '',
    password: '',
    deviceToken: 'dfgsdgsdgsd',
  },
  isLoggedIn: false,
  loading: false,
  user: undefined,
  error: {},
  apiError: undefined,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    handleApiError: (state, {payload}) => {
      state.apiError = payload;
    },
    handleUserLoginChangeData: (state, {payload}) => {
      return {
        ...state,
        userLoginData: {
          ...state.userLoginData,
          [payload?.key]: payload?.value,
        },
      };
    },
  },
});

export const {handleApiError, handleUserLoginChangeData} = authSlice.actions;

export default authSlice.reducer;
