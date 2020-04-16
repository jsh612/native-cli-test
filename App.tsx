import 'react-native-gesture-handler';
import React from 'react';
import styled from 'styled-components';
import {View, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/Home/index';
import Settings from './src/Settings/index';

const SView = styled(View)`
  height: 90%;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;
