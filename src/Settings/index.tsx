import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

const SView = styled(View)`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const Settings = () => {
  return (
    <SafeAreaView>
      <SView>
        <Text>세팅</Text>
      </SView>
    </SafeAreaView>
  );
};

export default Settings;
