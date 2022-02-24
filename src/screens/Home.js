import { Axios } from 'axios';
import * as React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import FancyButton from '../components/buttons/FancyButton';
import FancyFlatlist from '../components/FancyFlatlist';
import api from '../services/API';
import { options } from '../services/Endpoints';

const DATA = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2016/12/01/18/15/hourglass-1875812_960_720.jpg',
    title: 'Sword',
    time: 100,
    rate: 18,
  },
  {
    id: 2,
    url: 'https://randompicturegenerator.com/img/national-park-generator/ga38326a66bb4cee5c1800557aec188712b84090e93c6ceae404ad4d1fd995ec7a2336b25b78bee182a83b145b29178fb_640.jpg',
    title: 'Shield',
    time: 30,
    rate: 16,
  },
  {
    id: 3,
    url: 'https://randompicturegenerator.com/img/national-park-generator/gad38a27d3bf053db62da0024f15492145e5cceb227371b0755fed1def74efefb5540c9f0021cbf5c68fd1ad08b2be74c_640.jpg',
    title: 'Lance',
    time: 120,
    rate: 10,
  },
  {
    id: 4,
    url: 'https://randompicturegenerator.com/img/national-park-generator/g040c2d7badcf67cfa42895c620f11d85ebc3c91af796141f3c7da6ff1c89afb2b0b056772cf7f534cfc2261a55e192d6_640.jpg',
    title: 'Helmet',
    time: 20,
    rate: 12,
  },
  {
    id: 5,
    url: 'https://randompicturegenerator.com/img/national-park-generator/gb841c9f75ecca147f48d26df2bdf4fd45b8b4333315670814b3ddae18bf974db506f9323a7fcf65130e4ce9ff0e33826_640.jpg',
    title: 'Gloves',
    time: 80,
    rate: 18,
  },
  {
    id: 6,
    url: 'https://randompicturegenerator.com/img/national-park-generator/g999d21a129e145e63387837d7d86bbfd302a36e9ead3889d645a3f00e625dee6fbf4d604f27d6237ee537087f8894197_640.jpg',
    title: 'Breastplate',
    time: 45,
    rate: 14,
  },
  {
    id: 7,
    url: 'https://randompicturegenerator.com/img/national-park-generator/g41029de0a3156ed940a29e808f8f73b4c171b65903325f2f2319dfe5a7eed8738a586ca5d66547d91aca5ecb75370677_640.jpg',
    title: 'Arrow',
    time: 200,
    rate: 12,
  },
  {
    id: 8,
    url: 'https://randompicturegenerator.com/img/national-park-generator/gf63d733e588bfed65d7de0fc3f05197e455d003a9ce9c81a765c80f07417b213946659fd9a9e9e9645c67a79f64c5249_640.jpg',
    title: 'Pants',
    time: 100,
    rate: 12,
  },
  {
    id: 9,
    url: 'https://randompicturegenerator.com/img/national-park-generator/g70499cb46d76776e92f816f73152e94a0fde9a714e3653f5cb1d912c3a987a38b0e98f48542f7008f49fd4aaea710a94_640.jpg',
    title: 'Armor',
    time: 60,
    rate: 18,
  },
  {
    id: 10,
    url: 'https://randompicturegenerator.com/img/national-park-generator/gee3cf7d75d529c0e0e1580a1a5b2b18dcb2a6729ca45db370ca84938bdf518cb1f3fb253c658e034827647b9172ec1ad_640.jpg',
    title: 'Boots',
    time: 300,
    rate: 18,
  },
];


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gotData: []
    }
  }

  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    api.get().then(result => {
      console.log("#####RESULT: ", this.state.gotData)
      this.setState({
        gotData: result.data
      })
    }
    )
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.customListView}>
          <FancyFlatlist data={this.state.gotData} navigation={this.props.navigation} />
        </View>
        <View style={styles.buttonView}>
          <FancyButton title="Profile" screen="Profile" navigation={this.props.navigation} />
        </View>
      </View>
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
    backgroundColor: '#99AA66',
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
    color: '#5F0A00',
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