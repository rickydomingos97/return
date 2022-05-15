import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../success.png'

import { styles } from './styles';

export function Success() {
  return (
    <View style={styles.container}>
        <Image
        source={successImg}
        style={styles.image}
        />

        <Text style={styles.title}
        >
            
        </Text>
    </View>
  );
}