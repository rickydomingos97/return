import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  image: {
      width: 36,
      height: 36,
      marginTop: 42,
      marginBottom: 10
  },
  title: {
      fontSize: 20,
      marginBottom: 24,
      fontFamily: theme.fonts.medium,
      color: theme
  }
});