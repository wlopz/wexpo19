import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TouchableHighlight,
 
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { DrawerNavigator } from 'react-navigation';







class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (            

        <View style={styles.overlayCotainer}>

        <View style={styles.top}>
          <Image
          source={require('./assets/images_wexpo19/logo.png')}
          style={{height: 60, width: 115,resizeMode: 'contain'}}/>
         </View> 


        <View style={styles.container}>
        <View style={styles.menuContainer}>
               
        
         <TouchableHighlight onPress={() => navigate('Workshops')}>
          <Image
          source={require('./assets/images_wexpo19/workshops.png')}
          style={{height: 120, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Vendors')}>
          <Image
          source={require('./assets/images_wexpo19/vendors.png')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
          </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Map')}>  
          <Image
          source={require('./assets/images_wexpo19/venuemap.png')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Sponsors')}>

         <Image
          source={require('./assets/images_wexpo19/sponsors.png')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Vip')}> 
         <Image
          source={require('./assets/images_wexpo19/vip.png')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => navigate('Gallery')}>
          <Image
          source={require('./assets/images_wexpo19/Gallerybotton.png')}
          style={{height: 150, width: 110,resizeMode:'contain'}}/>
        </TouchableHighlight>

        </View>
        </View>
        </View>


    );
  }
}




class WorkshopsScreen extends React.Component {
  static navigationOptions = {
    title: 'Workshops',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Workshops Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class VendorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Vendors',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Vendors Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Map Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class SponsorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sponsors',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sponsors Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class VipScreen extends React.Component {
  static navigationOptions = {
    title: 'VIP',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>VIP Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Gallery Screen!</Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Workshops: {
    screen: WorkshopsScreen
  },
  Vendors: {
    screen: VendorsScreen
  },
  Map: {
    screen: MapScreen
  },
  Sponsors: {
    screen: SponsorsScreen
  },
  Vip: {
    screen: VipScreen
  },
  Gallery: {
    screen: GalleryScreen
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
    height: '10%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 15,
    borderBottomWidth: 8,
    paddingBottom: 5,
    borderColor: 'rgba(174,108,165,0.4)',
  },

  // header:{
  //   borderColor: 'rgba(255,58,140,0.10)',
  //   borderWidth:5,
  //   padding: 20, 
  //   backgroundColor: 'rgba(255,255,255, .10)',
  // },

  menuContainer: {
    padding: 30,
    paddingRight: 25,
    paddingLeft: 25,
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