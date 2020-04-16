import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {View, Text, Alert} from 'react-native';
import axios from 'axios';

const SView = styled(View)`
  width: 300px;
  height: 300px;
  background-color: yellowgreen;
  border: solid 2px black;
`;

const JText = styled(Text)`
  font-size: 15px;
  font-weight: 800;
  margin: 5px;
`;

const Home = () => {
  const [joke, setJoke] = useState<string>('Loading');

  const fetchJoke = async () => {
    try {
      const {data} = await axios('http://api.icndb.com/jokes/random');
      if (data.type === 'success') {
        setJoke(data.value.joke);
      } else {
        throw new Error('문제가 생김');
      }
    } catch (error) {
      Alert.alert('에러', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <SView>
      <Button icon="camera" color="red">
        홈
      </Button>
      <JText>{joke}</JText>
    </SView>
  );
};

export default Home;
