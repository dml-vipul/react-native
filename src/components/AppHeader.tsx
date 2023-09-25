import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import logo from '../../images/logo.png';

export default function AppHeader({marginHeader, ArrowBack}) {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.logo, {marginTop: marginHeader}]}>
        <Image source={logo} style={{width: 74, height: 82}} />
        <Text style={styles.logoText}>Neemo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  mainContainer: {},
});
