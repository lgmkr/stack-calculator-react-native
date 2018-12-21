import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

const baseStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderColor: '#d6d7da',
};

const baseText = {
  fontSize: 36,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseStyles,
    backgroundColor: '#f2f2f2',
  },
  specialContainer: {
    flex: 2,
    ...baseStyles,
    backgroundColor: '#9bc23c',
  },
  text: {
    ...baseText,
  },

  textSpecial: {
    ...baseText,
    color: '#fff',
  },
});
const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.textSpecial : styles.text}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  special: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  special: false,
  onPress: () => console.log('default onPress'),
};

export default Button;
