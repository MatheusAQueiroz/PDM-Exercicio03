import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contatos.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone TEXT NOT NULL, imagemUri TEXT NOT NULL, tempo INTEGER NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            )
        });
    });
    return promise;
}

export const inserirContato = (nome, telefone, imagemUri, tempo, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO tb_contato (nome, telefone, imagemUri, tempo, lat, lng) VALUES (?,?,?,?,?,?)',
                [nome, telefone, imagemUri, tempo, lat, lng],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        });
    });
    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        });
    });
    return promise;
}