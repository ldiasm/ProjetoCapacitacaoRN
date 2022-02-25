import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class DetailedCharacter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.mainView}>
        {data.name ? <Text style={styles.customDescriptionText}>
          {`Nome: ${data.name}`}
        </Text> 
        : <View />
        }
        {data.aliases ?
          <Text style={styles.customDescriptionText}>
            {`Conhecido como: ${data.aliases}`}
          </Text> 
          : <View />
        }
        {data.gender ?
          <Text style={styles.customDescriptionText}>
            {`Gênero: ${data.gender}`}
          </Text>
          : <View />
        }
        {data.cultura ?
          <Text style={styles.customDescriptionText}>
            {`Cultura: ${data.culture}`}
          </Text> 
          : <View />
        }
        {data.born ?
          <Text style={styles.customDescriptionText}>
            {`Nascimento: ${data.born}`}
          </Text>
          : <View />
        }
        {data.died ?
          <Text style={styles.customDescriptionText}>
            {`Morreu em: ${data.died}`}
          </Text>
          : <View />
        }
        <Text style={styles.customDescriptionText}>
          {`Pai: ${data.father}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Mãe: ${data.mother}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Cônjuge: ${data.spouse}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Alianças: ${data.allegiances}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Livros: ${data.books}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Protagonizado em: ${data.povBooks}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Aparece em: ${data.tvSeries}`}
        </Text>
        <Text style={styles.customDescriptionText}>
          {`Interpretado por: ${data.playedBy}`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 32,
    backgroundColor: '#1A1F3A',
  },
  customDescriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white'
  }
})