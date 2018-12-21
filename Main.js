import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Animatable from 'react-native-animatable';
import Button from './Button';
import {
  pressNum, clear, enter, operation, swap,
} from './actions';

const baseNumberStyle = {
  backgroundColor: '#333',
  textAlign: 'right',
  padding: 10,
  fontSize: 40,
  borderBottomWidth: 1,
  borderColor: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  // number: {
  //   color: '#fff',
  //   backgroundColor: '#424242',
  //   textAlign: 'right',
  //   padding: 10,
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },

  numberWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  append: {
    ...baseNumberStyle,
    color: '#fff',
  },
  replace: {
    ...baseNumberStyle,
    color: '#2E71E5',
  },
  push: {
    ...baseNumberStyle,
    color: '#9bc23c',
  },
});

class Main extends React.PureComponent {
  render() {
    const {
      calculatorState: { stack, inputState },
      pressNumWithDispatch,
      enterAction,
      operationAction,
      clearAction,
      swapAction,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.numberWrapper}>
            <Text style={styles.append}>{stack[2] || 0}</Text>
          </View>
          <View style={styles.numberWrapper}>
            <Animatable.Text style={styles.append}>{stack[1] || 0}</Animatable.Text>
          </View>
          <View style={styles.numberWrapper}>
            <Animatable.Text
              ref={(el) => {
                this.text1 = el;
              }}
              style={styles[inputState]}
            >
              {stack[0] || 0}
            </Animatable.Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button text="clear" onPress={clearAction} />
            <Button text="pow" onPress={operationAction} />
            <Button text="swap" onPress={swapAction} />
            <Button text="/" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="9" onPress={pressNumWithDispatch} />
            <Button text="8" onPress={pressNumWithDispatch} />
            <Button text="7" onPress={pressNumWithDispatch} />
            <Button text="x" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="6" onPress={pressNumWithDispatch} />
            <Button text="5" onPress={pressNumWithDispatch} />
            <Button text="4" onPress={pressNumWithDispatch} />
            <Button
              text="-"
              onPress={(x) => {
                operationAction(x);
                this.text1.flash(500);
              }}
            />
          </View>
          <View style={styles.row}>
            <Button text="3" onPress={pressNumWithDispatch} />
            <Button text="2" onPress={pressNumWithDispatch} />
            <Button text="1" onPress={pressNumWithDispatch} />
            <Button
              text="+"
              onPress={(x) => {
                operationAction(x);
                this.text1.flash(500);
              }}
            />
          </View>
          <View style={styles.row}>
            <Button text="0" onPress={pressNumWithDispatch} />
            <Button text="." />
            <Button text="enter" special onPress={enterAction} />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  calculatorState: state,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    pressNumWithDispatch: pressNum,
    enterAction: enter,
    operationAction: operation,
    clearAction: clear,
    swapAction: swap,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
