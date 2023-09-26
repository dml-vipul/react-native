import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import TextField from '../components/TextField';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LockEye from '../assests/commonImage/LockEye.png';
import {CustomCheckBox} from '../components/CustomCheckbox';
import CustomButton from '../components/CustomButton';
import FooterImage from '../components/FooterImage';
import {useAppDispatch, useAppSelector} from '../redux/reduxHooks/hooks';
import {
  removeLocalStoarage,
  setLocalStorage,
} from '../api/asyncStorage/storage';
import {login} from '../redux/slice/authSlice/authAction';
import {handleUserLoginChangeData} from '../redux/slice/authSlice/authSlice';

export default function Login() {
  const navigation = useNavigation<any>();

  const dispatch = useAppDispatch();

  const [activeIcone, setActiveIcone] = useState<string>('eye-with-line');
  const [checkBoxValue, setcheckBoxValue] = useState<boolean>(true);
  const {userLoginData, loading} = useAppSelector(state => state.authSlice);
  // const [userLoginData, setUserLoginData] = useState({
  //   email: '',
  //   password: '',
  // });
  const [msg, setMsg] = useState<any>('');

  // const handleChangeData = (value: string, key: string) => {
  //   setUserLoginData(prevData => ({
  //     ...prevData,
  //     [key]: value,
  //   }));
  // };

  const handleChangeData = (value: string, key: string) => {
    dispatch(handleUserLoginChangeData({value, key}));
  };

  const validateLength = (text: string) => {
    console.log(text);
    return text?.length;
  };

  const validateEmail = (data: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex?.test(data);
  };

  const validatePassword = (data: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex?.test(data);
  };

  const handleLogin = () => {
    setMsg('');
    console.log(userLoginData);
    if (!validateLength(userLoginData.email)) {
      setMsg('Email is required');
    } else if (!validateEmail(userLoginData.email)) {
      setMsg('Email is invalid');
    } else if (!validateLength(userLoginData.password)) {
      setMsg('Password is required');
    } else if (!validatePassword(userLoginData.password)) {
      setMsg('Password is invalid');
    } else {
      if (checkBoxValue) {
        setLocalStorage('loginData', userLoginData);
      } else {
        removeLocalStoarage('loginData');
      }

      //Dispatch the login action
      dispatch(login(userLoginData))
        .then((response: any) => {
          if (response.payload?.code === 200) {
            console.log('Api call successfull');
          } else {
            console.log(response);
          }
        })
        .catch(error => {
          setMsg(error?.payload?.message);
        });
    }
  };

  console.log(msg);

  return (
    <>
      <AppHeader marginHeader={30} ArrowBack={true} />
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={styles.welcomeTxt}>
          <Text style={styles.welcomeHeading}>Welcome back</Text>
          <Text style={styles.welcomeSubHeading}>
            Hay! Good to see you again.
          </Text>
        </View>
        <View style={styles.textFieldContainer}>
          <View style={styles.textField1}>
            <TextField
              value={userLoginData.email}
              placeholder="Email"
              leftIcone={() => (
                <Fontisto name="email" size={20} color="#707070" />
              )}
              rightImage={false}
              handleChange={text => handleChangeData(text, 'email')}
            />
          </View>
          <View style={styles.textField1}>
            <TextField
              value={userLoginData.password}
              placeholder="Password"
              onIconeChane={() => {
                let icone = activeIcone === 'eye' ? 'eye-with-line' : 'eye';
                setActiveIcone(icone);
              }}
              iconeName={activeIcone}
              leftIcone={() => (
                <Feather name="lock" size={18} color="#707070" />
              )}
              rightImage={LockEye}
              handleChange={text => handleChangeData(text, 'password')}
            />
          </View>
        </View>
        <View style={styles.CheckboxRowMain}>
          <View style={styles.CheckboxRow}>
            <CustomCheckBox
              checkBoxValue={checkBoxValue}
              onValueChange={value => setcheckBoxValue(value)}
            />
            <Text style={styles.rememberMeTxt}>Remember me</Text>
          </View>
          <Text style={styles.forgetPwd}>Forgot Password?</Text>
        </View>
        <View style={styles.button}>
          <CustomButton onPress={() => handleLogin()} title="LOGIN" />
        </View>
      </ScrollView>
      <FooterImage />
    </>
  );
}
const styles = StyleSheet.create({
  welcomeTxt: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  welcomeHeading: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    textAlign: 'left',
    color: '#343434',
    bottom: 5,
  },
  welcomeSubHeading: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    color: '#707070',
  },
  textFieldContainer: {
    marginVertical: 24,
  },
  textField1: {
    marginVertical: '2%',
  },
  CheckboxRowMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  CheckboxRow: {
    flexDirection: 'row',
  },
  rememberMeTxt: {
    color: '#343434',
    fontWeight: '400',
  },
  forgetPwd: {
    color: '#707070',
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    marginVertical: 20,
  },
});
