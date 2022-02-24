import * as React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class FancyFlatlist extends React.Component {
  constructor(props) {
    super(props);
  }

  goTo = (url) => {
    console.log("Cliquei em: ", url)
    this.props.navigation.navigate("Profile", {screen: "Profile", character: url})
  }


  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => this.goTo(item.url)} >
          {/* <View style={styles.imageView}>
                    <ImageBackground style={styles.backgroundImage}
                        source={{ uri: item.url }} />
                </View> */}
          <View style={styles.descriptionView}>
            <Text style={styles.listItemText}>
              {`${item.aliases}`}
            </Text>
            <Text style={styles.listItemSubtitle}>
              {`Nome: ${item.name}`}
            </Text>
            <Text style={styles.listItemSubtitle}>
              {`Cultura: ${item.culture}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={item => this.renderItem(item, this.props.navigation)} >
      </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    padding: 32,
    backgroundColor: 'white'
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#118888',
    borderRadius: 8,
    height: 100,
    margin: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    padding: 8,
  },
  imageView: {
    flex: 1,
    padding: 8,
  },
  descriptionView: {
    flex: 3,
  },
  backgroundImage: {
    flex: 1,
  },
  listItemText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  listItemSubtitle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
  },
  customListView: {
    flex: 6,
    backgroundColor: 'white'
  },
  buttonView: {
    flex: 1,
  }
})