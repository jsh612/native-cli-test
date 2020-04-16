import React from 'react';
import styled from 'styled-components';
import {View, StatusBar} from 'react-native';

import Home from './src/Home/index';
import Settings from './src/Settings/index';
import Header from './src/Header';

const SView = styled(View)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Header />
      <SView>
        <Home />
        <Settings />
      </SView>
    </View>
  );
};

export default App;
