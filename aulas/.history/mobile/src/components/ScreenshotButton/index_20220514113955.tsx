import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface Props {
  screenshot: string | null
  onTakeShot: () => void;
  onRemoveshot() => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveshot }: Props) {
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={screenshot }
    >

    </TouchableOpacity>
  );
}