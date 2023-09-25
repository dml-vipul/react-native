import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import mail from '../../images/mail.png';
import Divider from '../components/Divider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

export default function Home() {
  const navigation = useNavigation();
  const handleGoogleLink = () => {
    console.log('Google Location Link');
  };
  return (
    <>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <AppHeader marginHeader={100} ArrowBack={false} />
        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderTxt}>Login to Neemo</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.loginFieldWrapper}>
            <Image source={mail} style={styles.mail} />
            <Text style={styles.mailTxt}>Login with Email</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider}>
          <Divider />
        </View>
        <View style={styles.socialContainer}>
          <Text style={{color: '#343434', fontWeight: '500'}}>
            Continue With
          </Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={handleGoogleLink}>
              <AntDesign name="google" size={30} color="#049F8F" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: 550,
  },

  loginHeader: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  loginHeaderTxt: {
    color: '#343434',
    fontSize: 22,
    fontWeight: '700',
  },
  loginFieldWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 42,
    borderColor: '#049F8F',
    backgroundColor: '#049F8F',
    marginHorizontal: 24,
    borderRadius: 4,
  },
  mail: {
    marginHorizontal: 18,
    marginVertical: 9,
  },
  mailTxt: {
    color: '#ffffff',
    borderLeftWidth: 1,
    borderLeftColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  divider: {
    marginVertical: 40,
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#E4F2E5',
    borderColor: '#E4F2E5',
    marginVertical: 10,
  },
});
