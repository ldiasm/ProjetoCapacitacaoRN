import * as React from 'react';
import { Text, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';
import api from '../services/API';

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCharacter: {}
    }
  }

  componentDidMount = () => {
    this.loadCharacter();
  }

  loadCharacter = () => {
    api.get(this.props.route.params.character).then(result => {
      this.setState({
        selectedCharacter: result.data
      })
      console.log("#####Character: ", this.state.selectedCharacter);
    })
  }

  render() {
    return (
      <View>
        <Text>
          {`${this.state.selectedCharacter.aliases}`}
        </Text>
        <FancyButton title="Home" screen="Home" navigation={this.props.navigation} />
      </View>
    )
  }
}

