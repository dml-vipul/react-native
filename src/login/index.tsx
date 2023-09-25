import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import TextField from '../components/TextField';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LockEye from '../assests/commonImage/LockEye.png';
import CustomCheckbox, {CustomCheckBox} from '../components/CustomCheckbox';
import CustomButton from '../components/CustomButton';
import FooterImage from '../components/FooterImage';

export default function Login() {
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
  });
  const [activeIcone, setActiveIcone] = useState<string>('eye-with-line');
  const [checkBoxValue, setcheckBoxValue] = useState<boolean>(true);

  const handleChangeData = (value: string, key: string) => {
    setUserLoginData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    console.log(userLoginData, 'Login data');
  };

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
