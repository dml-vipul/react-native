import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

interface TextField {
  placeholder: string;
  leftIcone?: any;
  iconeName?: string | undefined;
  rightImage: Object;
  multiline?: boolean;
  style?: Object;
  color?: string;
  value?: any;
  onIconeChane?: any;
  handleChange: (text: string) => void;
}

const TextField: React.FC<TextField> = ({
  placeholder,
  color,
  handleChange,
  multiline = false,
  value = undefined,
  leftIcone,
  rightImage,
  onIconeChane,
  iconeName = undefined,
}) => {
  return (
    <View style={[styles.fieldContainer]}>
      {leftIcone && (
        <>
          <View style={styles.imageContainer}>{leftIcone()}</View>
          <View style={styles.straightLine}></View>
        </>
      )}
      <TextInput
        value={value}
        multiline={multiline}
        onChangeText={text => handleChange(text.trim())}
        placeholderTextColor={color ? color : '#707070'}
        placeholder={placeholder}
        style={[styles.textInput]}
      />
      {rightImage && iconeName && (
        <Entypo
          name={iconeName}
          size={16}
          color="#707070"
          onPress={() => {
            onIconeChane();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F4FAF5',
    backgroundColor: '#F4FAF5',
    borderRadius: 5,
    marginHorizontal: 24,
  },
  textInput: {
    width: '75%',
    color: '#707070',
    lineHeight: 20,
    fontSize: 14,
    height: 'auto',
    paddingHorizontal: 20,
    fontWeight: '500',
  },
  imageContainer: {
    marginHorizontal: 15,
  },
  straightLine: {
    borderWidth: 0.35,
    borderColor: '#D6D6D6',
    height: 30,
  },
});

export default TextField;
