import React from 'react';
import {mascaraFinanceira} from '../services/tratarFinanceiro';
import {Descricao} from './descricao';
import {View} from 'react-native';

export const ResgateComponent = ({item, saldoTotalDisponivel}) => {
  console.log('aaaaaaaa', item);
  let valorAcao = (item.percentual * saldoTotalDisponivel) / 100;
  return (
    <View>
      <Descricao textEsquerdo={'Ação'} textDireito={item.nome} />
      <Descricao
        textEsquerdo={'Saldo acumulado'}
        textDireito={mascaraFinanceira(valorAcao)}
      />
    </View>
  );
};
