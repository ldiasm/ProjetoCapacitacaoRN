import * as React from 'react';
import { Text, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';
import DetailedCharacter from '../components/DetailedCharacter';
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
        <DetailedCharacter data={this.state.selectedCharacter}/>
        <FancyButton title="Home" screen="Home" navigation={this.props.navigation} />
      </View>
    )
  }
}

