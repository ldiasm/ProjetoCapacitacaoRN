import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    }
  }

  onChangeText = (text) => {
    this.setState({
      email: text
    })
    // console.log("#####TESTE INPUT", this.state.email, text)
  }

  render() {
    const { email } = this.state;
    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
        <Text>
          {`Meus Alunos`}
        </Text>
        </View>
        <View style={styles.fieldsView}>
          <TextInput
            style={styles.emailField}
            value={email}
            onChangeText={text => this.onChangeText(text)}
            keyboardType='email-address'
            placeholder='email'>
          </TextInput>
          <TextInput
            style={styles.passwordField}
            secureTextEntry
            placeholder='password'>
          </TextInput>
          <FancyButton 
            title="Login"
            screen="Home"
            navigation={this.props.navigation}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 32,
  },
  headerView: {
    flex: 1
  },
  fieldsView: {
    flex: 1
  },
  emailField: {
    borderColor: "#777777",
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8
  },
  passwordField: {
    borderColor: "#777777",
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8
  }
})