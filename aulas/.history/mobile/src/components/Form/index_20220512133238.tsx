import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

export function Form() {
  return (
    <View style={styles.container}>
<View style={styles.header}>
    <TouchableOpacity>
        <ArrowLeft 
        size={24}
        />
    </TouchableOpacity>
</View>
    </View>
  );
}