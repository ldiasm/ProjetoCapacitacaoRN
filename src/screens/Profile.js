import * as React from 'react';
import { Text, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>
        {`Hello Profile!`}
      </Text>
      <FancyButton title="Home" screen="Home" navigation={navigation}/>
    </View>
  )
}

export default Profile;