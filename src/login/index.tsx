import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

export default function Login() {
  const navigation = useNavigation();
  return (
    <>
      <AppHeader marginHeader={50} ArrowBack={true} />
    </>
  );
}

const styles = StyleSheet.create({});
