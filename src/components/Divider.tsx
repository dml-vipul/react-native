import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Divider() {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerLine}></View>
      <Text style={styles.dividerText}>Or</Text>
      <View style={styles.dividerLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLine: {
    borderWidth: 0.35,
    width: 140,
    borderColor: '#A4A4A4',
  },
  dividerText: {
    color: '#A4A4A4',
    marginHorizontal: 14,
    fontWeight: '500',
  },
});
