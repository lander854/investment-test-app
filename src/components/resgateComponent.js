import React, {useState} from 'react';
import {mascaraFinanceira} from '../services/tratarFinanceiro';
import {Descricao} from './descricao';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

export const ResgateComponent = ({
  item,
  saldoTotalDisponivel,
  setErrorGlobal,
  atualizaValor,
  keyObj,
}) => {
  const [valorResgate, setValorResgate] = useState(0);
  const [error, setError] = useState(false);
  let valorAcao = (item.percentual * saldoTotalDisponivel) / 100;

  const renderInput = () => {
    let valor = '' + valorResgate;
    return (
      <TextInput
        keyboardType="numeric"
        theme={{
          colors: {
            primary: '#000',
            placeholder: 'gray',
          },
          roundness: 6,
        }}
        error={error}
        label={'Valor a resgatar'}
        value={valorResgate}
        render={(props) => (
          <TextInputMask
            {...props}
            type={'money'}
            value={valorResgate ? valor : ''}
            onChangeText={(text) => {
              text = text.replace(/\D/g, '');
              setValorResgate(text);
              atualizaValor(text, keyObj);
              if (!error && text / 100 > valorAcao) {
                setError(true);
                setErrorGlobal(true);
              } else if (error && text / 100 < valorAcao) {
                setError(false);
                setErrorGlobal(false);
              }
            }}
          />
        )}
      />
    );
  };
  return (
    <View>
      <Descricao textEsquerdo={'Ação'} textDireito={item.nome} />
      <Descricao
        textEsquerdo={'Saldo acumulado'}
        textDireito={mascaraFinanceira(valorAcao)}
      />
      {renderInput()}
      {error && <Text style={{color: 'red', paddingLeft: 15}}>erro</Text>}
    </View>
  );
};
