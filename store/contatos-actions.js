import * as FileSystem from 'expo-file-system';
import { inserirContato, buscarContatos } from '../helpers/db';

export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

export const addContato = (nome, telefone, imagem, tempo, lat, lng) => {
    return async dispatch => {
        const nomeArquivo = imagem.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try{
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            });
            const resultadoDB = await inserirContato(nome, telefone, novoPath, tempo, lat, lng);
            dispatch({
                type: ADD_CONTATO,
                dadosContato: {id: resultadoDB.insertId, nome: nome, telefone: telefone, imagem: novoPath, tempo: tempo, lat: lat, lng: lng}
            })
        }
        catch (err){
            console.log (err);
            throw err;
        }
    };
}

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            dispatch({type: LISTA_CONTATOS, contatos: resultadoDB.rows._array});
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}