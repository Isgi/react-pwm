const React = require('react');
const PropTypes = require('prop-types');
const { TouchableOpacity } = require('react-native');
const { Text, View, StyleSheet } = require('react-primitives');

const Button = ({
  title,
  onPress,
  children,
  //themes
  light,
  primary,
  danger,
  warning,
  info,
  success
  }) => {

  //change theme style
  let styleTheme = null;
  if (light) {
    styleTheme = {
      backgroundColor: '#f4f4f4'
    }
  } else if (primary) {
    styleTheme = {
      backgroundColor: '#007aff'
    }
  } else if (danger) {
    styleTheme = {
      backgroundColor: '#d9534f'
    }
  } else if(warning) {
    styleTheme = {
      backgroundColor: '#f1ad4f'
    }
  } else if (info) {
    styleTheme = {
      backgroundColor: '#63b0f6'
    }
  } else if (success) {
    styleTheme = {
      backgroundColor: '#5cb75c'
    }
  } else {
    styleTheme = {
      backgroundColor: '#007aff'
    }
  }

  console.log(children);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styleTheme]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}
module.exports = Button;

Button.propTypes = {
  onPress : PropTypes.func.isRequired,
  children : PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#007aff'
  }
})
