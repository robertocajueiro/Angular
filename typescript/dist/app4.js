"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from './ConcessionariaDao'
const Dao_1 = require("./Dao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria_1.default('', []);
//dao.inserir(concessionaria);
//let dao2: PessoaDao = new PessoaDao()
let pessoa = new Pessoa_1.default('', '');
//dao2.atualizar(pessoa);
let dao3 = new Dao_1.Dao();
let dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.inserir(pessoa);
dao4.remover(5);
