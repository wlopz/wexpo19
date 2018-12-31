import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the Home screen</Text>
        <Button onPress={() => this.props.navigation.navigate('WorkshopsScreen')} title="Workshops"/>
        <Button onPress={() => this.props.navigation.navigate('VendorsScreen')} title="Vendors"/>
        <Button onPress={() => this.props.navigation.navigate('MapScreen')} title="Map"/>
        <Button onPress={() => this.props.navigation.navigate('SponsorsScreen')} title="Sponsors"/>
        <Button onPress={() => this.props.navigation.navigate('VipScreen')} title="VIP"/>
        <Button onPress={() => this.props.navigation.navigate('GalleryScreen')} title="Gallery"/>
      </View>
    )
  }
};

export default Home;