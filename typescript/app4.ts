//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from './ConcessionariaDao'
import { Dao } from './Dao';
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';


//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', []);

//dao.inserir(concessionaria);

//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '');

//dao2.atualizar(pessoa);

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4: Dao<Pessoa> = new Dao<Pessoa>();

dao3.inserir(concessionaria)
dao4.inserir(pessoa)
dao4.remover(5)