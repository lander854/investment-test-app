import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
export const Cabecalho = ({textEsquerdo, textDireito}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{textEsquerdo}</Text>
      <Text style={styles.headerText}>{textDireito}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
});
