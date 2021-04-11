import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import UserDetails from './screens/UserDetails';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: '#034EA2'
              },
              headerTintColor: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Contact list' }}
            />
            <Stack.Screen
              name="UserDetails"
              component={UserDetails}
              options={{ title: 'User Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;