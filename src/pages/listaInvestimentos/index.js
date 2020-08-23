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
        console.log(res);
        res.data &&
          res.data.response &&
          setListaInvestimentos(res.data.response.data.listaInvestimentos);
      })
      .catch((err) => {
        console.log('falha oa carregar dados, tentando novamente-->', err);
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

  const renderItem = ({item}) => {
    console.log(item);
    return <InvestimentoRow {...item} />;
  };
  const renderSeparator = () => <View style={styles.sepator} />;
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <Cabecalho textEsquerdo={'INVESTIMENTOS'} textDireito={'R$'} />
        <FlatList
          data={listaInvestimentos}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'rgb(241, 241, 241)', flex: 1},
  sepator: {
    backgroundColor: 'rgb(241, 241, 241)',
    height: 0.5,
  },
});

export default ListaInvestimentos;
