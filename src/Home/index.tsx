import React from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {View} from 'react-native';

const SView = styled(View)`
  width: 300px;
  height: 300px;
  background-color: yellowgreen;
`;

const Home = () => {
  return (
    <SView>
      <Button icon="camera" color="red">
        홈
      </Button>
    </SView>
  );
};

export default Home;
