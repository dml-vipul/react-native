import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface customButton {
  title: string;
  onPress: () => void | undefined;
}

const CustomButton: React.FC<customButton> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#049F8F',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 24,
    marginVertical: 15,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#ffffff',
  },
});

export default CustomButton;
