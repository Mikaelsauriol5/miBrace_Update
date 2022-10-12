import { withTheme } from '@emotion/react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	braceContainer: {
    flex: 1,
    color: "white",
    padding:40,
    backgroundColor: 'black',
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    fontFamily: 'Inter-Black',

  },

  title: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Inter-Black',

  },

  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
    fontFamily: 'Inter-Black',

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  sub: {
    fontSize: 26,
    color: '#5c5e62',
    paddingBottom: 20,
    fontFamily: 'Inter-Black',

  },

  buttonSignOut: {
    backgroundColor: "lightgreen",
  }
});

export default styles;