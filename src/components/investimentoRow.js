import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {mascaraFinanceira} from '../services/tratarFinanceiro';

export const InvestimentoRow = ({
  acoes,
  indicadorCarencia,
  nome,
  objetivo,
  saldoTotalDisponivel,
  acessaInvestimento,
}) => {
  const disabled = indicadorCarencia === 'S';
  const disabledStyle = disabled
    ? {
        color: 'gray',
        backgroundColor: 'rgb(250, 250, 250)',
      }
    : null;
  return (
    <Pressable
      disabled={disabled}
      onPress={() =>
        !disabled && acessaInvestimento(acoes, nome, saldoTotalDisponivel)
      }>
      <View style={[styles.row, disabledStyle]}>
        <View>
          <Text style={[styles.mainText, disabledStyle]}>{nome}</Text>
          <Text style={styles.secondaryText}>{objetivo}</Text>
        </View>
        <Text style={[styles.mainText, disabledStyle]}>
          {mascaraFinanceira(saldoTotalDisponivel)}
        </Text>
      </View>
    </Pressable>
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
