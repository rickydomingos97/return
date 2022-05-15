import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}

export function Button( {isLoading }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
        {
            isLoading
            ?
        }
    </TouchableOpacity>
  );
}