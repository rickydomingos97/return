import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  screenshot: string | null
  onTakeShot: ()
}

export function ScreenshotButton({ screenshot }: Props) {
  return (
    <TouchableOpacity style={styles.container}>

    </TouchableOpacity>
  );
}