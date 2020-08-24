import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {Cabecalho} from '../../components/cabecalho';
import {Descricao} from '../../components/descricao';
import {mascaraFinanceira} from '../../services/tratarFinanceiro';
import {ResgateComponent} from '../../components/resgateComponent';
export const ResgatePersonalizado = ({route, navigation}) => {
  const {nome} = route.params;
  const {saldoTotalDisponivel} = route.params;
  const {acoes} = route.params;

  const [valorResgatar, setValorResgatar] = useState(0);
  const [error, setError] = useState(false);
  const [valores, setValores] = useState({});

  const atualizaValor = (valor, key) => {
    let tempValores = {...valores};
    tempValores[key] = parseInt(valor, 10);
    let valorTotal = 0;
    for (const [key, value] of Object.entries(tempValores)) {
      valorTotal += value / 100;
    }
    setValores(tempValores);
    setValorResgatar(valorTotal);
  };
  const renderListHeader = () => {
    return (
      <>
        <Cabecalho textEsquerdo={'DADOS DO INVESTIMENTO'} />
        <Descricao textEsquerdo={'Nome'} textDireito={nome} />
        <Descricao
          textEsquerdo={'Saldo total disponível'}
          textDireito={mascaraFinanceira(saldoTotalDisponivel)}
        />
        <Cabecalho textEsquerdo={'RESGATE DO SEU JEITO'} />
      </>
    );
  };
  const renderItem = ({item, index}) => {
    console.log('itemInvestimento', item, index);
    return (
      <ResgateComponent
        item={item}
        saldoTotalDisponivel={saldoTotalDisponivel}
        setErrorGlobal={setError}
        atualizaValor={atualizaValor}
        keyObj={index}
      />
    );
  };
  const renderSeparator = () => <View style={styles.separator} />;

  const renderFooter = () => {
    return (
      <>
        <View style={styles.separator} />
        <Descricao
          textEsquerdo={'Valor total a resgatar'}
          textDireito={mascaraFinanceira(valorResgatar)}
        />
        <View style={styles.separator} />
        <Pressable
          style={[styles.button, error && {backgroundColor: 'gray'}]}
          disabled={error}
          onPress={() => console.log('aaaa')}>
          <Text style={styles.buttonText}>CONFIRMAR RESGATE</Text>
        </Pressable>
      </>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={renderListHeader}
      ListFooterComponent={renderFooter}
      data={acoes}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgb(241, 241, 241)',
    height: 15,
  },
  button: {
    backgroundColor: '#F9DD16',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0038A8',
  },
});
