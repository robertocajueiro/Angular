"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(object) {
        console.log('lógica de insert');
        return true;
    }
    atualizar(object) {
        console.log('Logica de update');
        return true;
    }
    remover(id) {
        console.log('logica delete');
        return Object();
    }
    selecionar(id) {
        console.log('logica select');
        return Object();
    }
    selecionarTodos() {
        console.log('logica getALL');
        return [Object()];
    }
}
exports.Dao = Dao;
