import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';
import authService from '../../../api/services/auth.service';

interface LoginPayload {
  loginType: string;
  role: string;
  email: string;
  password: string;
  deviceToken: string;
}

interface LoginResponse {
  data: {[x: string]: string};
  code: number;
  message: string;
}

export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  {rejectValue: SerializedError}
>('users/login', async (data: LoginPayload, thunkApi: any) => {
  try {
    const response = await authService.login(data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error as SerializedError);
  }
});
