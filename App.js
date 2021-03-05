import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';

import ContatoItem from './components/ContatoItem'
import ContatoInput from './components/ContatoInput'

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);
  // Funções de ação
  const adicionarContato = (contato) => {
    setContatos(contatos => {
      setContador(contador + 1);
      return [...contatos, {key: contador.toString(), value: contato}];
    });
    console.log(contatos);
  }
  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter(contato => (contato.key !== keyASerRemovida));
    })
  }
  return (
    <View style={styles.container}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
        data={contatos}
        style={{width: '80%'}}
        renderItem={ 
          contato =>
          <ContatoItem chave={contato.item.key} onDelete={removerContato} contato={contato.item.value}/>
        }  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center'
  }
});
