import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
export const Descricao = ({textEsquerdo, textDireito}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textEsquerda}>{textEsquerdo}</Text>
      <Text style={styles.textDireita}>{textDireito}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(231, 231, 231)',
  },
  textEsquerda: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  textDireita: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
});
