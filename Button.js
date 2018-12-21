import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

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
class Button extends React.PureComponent {
  render() {
    const { text, special, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          onPress(text);
          this.text.rubberBand(400);
        }}
        style={special ? styles.specialContainer : styles.container}
      >
        <Animatable.Text
          ref={(el) => {
            this.text = el;
          }}
          style={special ? styles.textSpecial : styles.text}
        >
          {text}
        </Animatable.Text>
      </TouchableOpacity>
    );
  }
}

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
