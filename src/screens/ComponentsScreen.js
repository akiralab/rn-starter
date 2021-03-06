import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CompenentScreen = () => {
 return <Text style={styles.textStyle}> This is the compents screen</Text>;
};

const styles = StyleSheet.create({
 textStyle: {
  fontSize: 30,
 },
});

export default CompenentScreen;
