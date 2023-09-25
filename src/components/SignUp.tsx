import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000000',
  },
});
