import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default styles;