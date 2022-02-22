import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FancyButtonText extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <Text style={styles.buttonText}>
          {`${title}`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '500',
    color: "white"
  }
})

export default FancyButtonText;