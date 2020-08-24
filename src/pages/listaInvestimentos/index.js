import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Alert, FlatList} from 'react-native';
import {carregarInvestimentos} from '../../services/api';
import {Cabecalho} from '../../components/cabecalho';
import {InvestimentoRow} from '../../components/investimentoRow';

const ListaInvestimentos = (props) => {
  const [listaInvestimentos, setListaInvestimentos] = useState(undefined);

  const carregaDados = () => {
    carregarInvestimentos()
      .then((res) => {
        res.data &&
          res.data.response &&
          setListaInvestimentos(res.data.response.data.listaInvestimentos);
      })
      .catch((err) => {
        Alert.alert(
          'Erro ao carregar investimentos',
          'Por favor tente novamente',
          [{text: 'OK', onPress: () => carregaDados()}],
          {cancelable: false},
        );
      });
  };
  // componentDidMount
  useEffect(() => {
    carregaDados();
  }, []);

  const acessaInvestimento = (acoes, nome, saldoTotalDisponivel) => {
    props.navigation.push('resgate', {
      acoes,
      nome,
      saldoTotalDisponivel,
    });
  };

  const renderItem = ({item}) => {
    return (
      <InvestimentoRow {...item} acessaInvestimento={acessaInvestimento} />
    );
  };
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Cabecalho textEsquerdo={'INVESTIMENTOS'} textDireito={'R$'} />
        <FlatList
          data={listaInvestimentos}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item, index) => index + ''}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'rgb(241, 241, 241)', flex: 1},
  separator: {
    backgroundColor: 'rgb(241, 241, 241)',
    height: 0.5,
  },
});

export default ListaInvestimentos;
