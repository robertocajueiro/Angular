"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
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
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        console.log('logica select');
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log('logica getALL');
        return [new Concessionaria_1.default('', [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
