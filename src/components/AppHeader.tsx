import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import logo from '../../images/logo.png';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  marginHeader: number;
  ArrowBack: boolean;
}

export default function AppHeader<HeaderProps>({marginHeader, ArrowBack}) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerRow}>
        {ArrowBack && (
          <TouchableOpacity
            style={[styles.buttonBack]}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={30} color="grey" />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.logo, {marginTop: marginHeader}]}>
        <Image source={logo} style={{width: 74, height: 82}} />
        <Text style={styles.logoText}>Neemo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    height: 270,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#049F8F',
    fontSize: 44,
    fontWeight: '400',
  },
  buttonBack: {
    width: 100,
  },
  headerRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
