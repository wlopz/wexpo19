import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
 
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { DrawerNavigator } from 'react-navigation';







class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (            

        <View style={styles.overlayCotainer}>

        <View style={styles.top}>
          
        </View>

        <ScrollView>

        <View>
          <Image source={require('./assets/images_wexpo19/welcome.png')} style={{height: 150, width: '100%', paddingBottom: 0}}/>
        </View> 


        <View style={styles.container}>
        <View style={styles.menuContainer}>
               
        
         <TouchableHighlight onPress={() => navigate('Youth')}>
          <Image
          source={require('./assets/images_wexpo19/youthicon.jpg')}
          style={{height: 120, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Event')}> 
         <Image
          source={require('./assets/images_wexpo19/events.jpg')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Map')}>  
          <Image
          source={require('./assets/images_wexpo19/venuemap.jpg')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Vendors')}>
          <Image
          source={require('./assets/images_wexpo19/vendors.jpg')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
          </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Sponsors')}>
         <Image
          source={require('./assets/images_wexpo19/sponsors.jpg')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Credit')}>
          <Image
          source={require('./assets/images_wexpo19/medalla.jpg')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        </View>
        </View>
        </ScrollView>
        </View>


    );
  }
}




class YouthScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/youthup.png')}
            style={{height: 850, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>
    );
  }
}

class EventScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/Events_final.png')}
            style={{height: 850, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/map_final.png')}
            style={{height: 600, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>
    );
  }
}

class VendorsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/Vendors_final.png')}
            style={{height: 850, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>  
    );
  }
}

class SponsorsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/Sponsors_final.png')}
            style={{height: 850, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>
    );
  }
}

class CreditScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./assets/images_wexpo19/logo.png')} style={{height: 35, width: 115,resizeMode: 'contain'}}/>
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('./assets/images_wexpo19/Credits_final.png')}
            style={{height: 300, width: 375,resizeMode:'contain'}}
            />
        </ScrollView>
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Youth: {
    screen: YouthScreen
  },
  Event: {
    screen: EventScreen
  },
  Map: {
    screen: MapScreen
  },
  Vendors: {
    screen: VendorsScreen
  },
  Sponsors: {
    screen: SponsorsScreen
  },
  Credit: {
    screen: CreditScreen
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,58,140,0.01)'
   }, 


  overlayCotainer: {
    flex: 1,
    backgroundColor: 'rgba(255,58,140,0.01)',
  },

  top: {
    height: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 15,
    borderBottomWidth: 10,
    paddingBottom: 0,
    borderColor: 'rgba(174,108,165,0.4)',
  },

  // header:{
  //   borderColor: 'rgba(255,58,140,0.10)',
  //   borderWidth:5,
  //   padding: 20, 
  //   backgroundColor: 'rgba(255,255,255, .10)',
  // },

  menuContainer: {
    padding: 5,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 50,
    height:'90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  image: {
    width: '100%',
    height: '100%'
  },

  image_vendor: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },

  welcome: {
    fontSize: 20,
    textAlign: 'right',
    padding:10,
    margin: 10,
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    
  }
});