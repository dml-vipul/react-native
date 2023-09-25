import {Image, StyleSheet, Text, View} from 'react-native';
import frame from '../assests/commonImage/Frame.png';
export default function FooterImage() {
  return (
    <View style={styles.footerImage}>
      <Image source={frame} />
    </View>
  );
}

const styles = StyleSheet.create({
  footerImage: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
