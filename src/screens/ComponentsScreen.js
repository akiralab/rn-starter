import React, { useState } from 'react';
import { Image, Text, TextInput, View, ScrollView } from 'react-native';

const logo = {
 uri: 'https://reactnative.dev/img/tiny_logo.png',
 width: 64,
 height: 64,
};

const App = () => (
 <ScrollView>
  <Text style={{ fontSize: 10 }}>Scroll me!</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
 </ScrollView>
);

export default App;
