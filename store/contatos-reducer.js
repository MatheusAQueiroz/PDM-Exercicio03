import Contato from '../modelo/Contato';
import { ADD_CONTATO, LISTA_CONTATOS } from './contatos-actions';

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {
    switch(action.type) {
        case ADD_CONTATO:
            const c = new Contato(action.dadosContato.id.toString(), action.dadosContato.nome, action.dadosContato.telefone, action.dadosContato.imagem);
            return {
                contatos: estado.contatos.concat(c)
            }
        case LISTA_CONTATOS:
            return {
                contatos: action.contatos.map(c => new Contato(c.id.toString(), c.nome, c.telefone, c.imagemUri))
            }
        default:
            return estado;
    }
}