const React = require('react');
const { Touchable, Text, View, StyleSheet } = require('react-primitives');

const Button = ({ title }) => (
  <Touchable onPress={() => {}}>
    <View style={styles.container}>
      <Text>title</Text>
    </View>
  </Touchable>
)

module.exports = Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})
