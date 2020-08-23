import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {mascaraFinanceira} from '../services/tratarFinanceiro';

export const InvestimentoRow = ({
  indicadorCarencia,
  nome,
  objetivo,
  saldoTotalDisponivel,
}) => {
  // console.log('aaaa', indicadorCarencia, nome, objetivo, saldoTotalDisponivel);
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.mainText}>{nome}</Text>
        <Text style={styles.secondaryText}>{objetivo}</Text>
      </View>
      <Text style={styles.mainText}>
        {mascaraFinanceira(saldoTotalDisponivel)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 18,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryText: {
    color: 'gray',
  },
});
