import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLo
}

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}