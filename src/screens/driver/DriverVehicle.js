import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  createDrawerNavigator,
  Image,
  TouchableHighlight,
} from 'react-native';
import {
  Content,
  Container,
  Header,
  Left,
  Icon,
  Footer,
  Body,
  Card,
  CardItem,
} from 'native-base';
export default class DriverVehicle extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../Images/vehicle.png')}
        style={{ width: 25, height: 25 }}
      />
    ),
  };
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#42A5F5', height: 60 }}>
          <Left>
            <TouchableHighlight
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name="arrow-back" style={{ color: '#ffffff' }} />
            </TouchableHighlight>
          </Left>
          <Body>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Vehicle Details
            </Text>
          </Body>
        </Header>

        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  map: {
    height: 600,
    marginTop: 0,
  },
});
