import * as React from 'react';
import { Text, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>
        {`Hello Home!`}
      </Text>
      <FancyButton title="Profile" navigation={navigation}/>
    </View>
  )
}

export default Home;