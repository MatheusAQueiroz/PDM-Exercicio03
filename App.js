import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';

export default function App() {
  const [contato, setContato] = useState({nome: '', telefone: ''});
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);
  // Funções de ação
  const capturarNome = (nome) => {
    setContato({nome: nome, telefone: contato.telefone});
  }
  const capturarTelefone = (telefone) => {
    setContato({nome: contato.nome, telefone: telefone});
  }
  const adicionarContato = () => {
    setContatos(contatos => {
      setContador(contador + 1);
      return [...contatos, {key: contador.toString(), value: contato}];
    });
    setContato({nome: '', telefone: ''});
    console.log(contatos);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        {/* Inserção de Lembretes */}
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <TextInput placeholder="Nome" style={styles.inputField} onChangeText={capturarNome} value={contato.nome}/>
          <TextInput placeholder="Telefone" style={styles.inputField} onChangeText={capturarTelefone} value={contato.telefone}/>
        </View>
        <Button title="Cadastrar" onPress={adicionarContato}></Button>
      </View>
      <FlatList
        data={contatos}
        style={{width: '80%'}}
        renderItem={
          contato =>
          <View style={styles.itemView} key={contato.item.key}>
            <Text>{`Nome: ${contato.item.value.nome} - Telefone: ${contato.item.value.telefone}`} </Text>
          </View>
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
  },
  inputView: {
    width: '80%',
    padding: 12
  },
  inputField: {
    flex: .49,
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2
  },
  itemView: {
    flexDirection: 'row',
    borderColor: '#2196F3',
    margin: 10,
    padding: 12,
    borderWidth: 3,
    borderRadius: 15
  }
});
