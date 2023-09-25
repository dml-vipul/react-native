import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface customCheckBox {
  disabled?: boolean;
  checkBoxValue: boolean;
  onValueChange: (arg0: boolean) => void | undefined;
}

export const CustomCheckBox: React.FC<customCheckBox> = ({
  disabled = false,
  onValueChange,
  checkBoxValue,
}) => {
  return (
    <CheckBox
      style={styles.checkBoxContainer}
      disabled={disabled}
      value={checkBoxValue}
      onCheckColor="#049F8F"
      tintColors="#049F8F"
      onTintColor="#049F8F"
      onValueChange={onValueChange}
    />
  );
};
const styles = StyleSheet.create({
  checkBoxContainer: {
    height: 20,
  },
});
