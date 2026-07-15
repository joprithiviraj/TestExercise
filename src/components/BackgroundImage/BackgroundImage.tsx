import { View, Text, Image } from 'react-native'
import React from 'react'
import bgImage from '../../../assets/images/bgImage.jpg'
import styles from './BackgroundImageStyles';

const BackgroundImage = () => {
  return (
    <View>
      <Image
        source={bgImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  )
  
}

export default BackgroundImage