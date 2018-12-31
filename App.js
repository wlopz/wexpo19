import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Workshops</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Workshops')}
        />
        <Text style={styles.welcome}>Vendors</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Vendors')}
        />
        <Text style={styles.welcome}>Map</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Map')}
        />
        <Text style={styles.welcome}>Sponsors</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Sponsors')}
        />
        <Text style={styles.welcome}>VIP</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Vip')}
        />
        <Text style={styles.welcome}>Gallery</Text>
        <Button
          title="Click Here"
          onPress={() => navigate('Gallery')}
        />
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});