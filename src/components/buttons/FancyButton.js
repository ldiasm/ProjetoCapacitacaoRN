import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FancyButtonText from './FancyButtonText';

class FancyButton extends React.Component {
  render() {
    const { title, navigation } = this.props;
    return (
      <View style={styles.mainTheme}>
        <TouchableOpacity 
          style={styles.touchArea}
          onPress={() => navigation.navigate(title, {screen: title})}>
          <FancyButtonText title={title}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    height: 40,
    width: 250,
    backgroundColor: "#444488",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  touchArea: {
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FancyButton;