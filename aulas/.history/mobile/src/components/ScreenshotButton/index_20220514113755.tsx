import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  screenshot: string | null
}

export function ScreenshotButton({}: Props) {
  return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}