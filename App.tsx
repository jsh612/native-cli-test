import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {View} from 'react-native';

declare const global: {HermesInternal: null | {}};

const SView = styled(View)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <SView>
      <Button icon="camera">안녕</Button>
    </SView>
  );
};

export default App;
