import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
    Text
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps
}

export function Option({ title, image, ...rest}: Props) {
  return (
    <TouchableOpacity
    style={styles.container}
    {...rest} //spread operator para nao precisar tipar tudo no touchable
    >
        <Image
        source={image}styl
        />

    </TouchableOpacity>
  );
}