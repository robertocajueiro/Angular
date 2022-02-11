import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = ''
  
    inserir(object: T ): boolean {
      console.log('lógica de insert')
      return true
    }
  
    atualizar(object: T ): boolean {
      console.log('Logica de update')
      return true
    }
  
    remover(id: number): T  {
      console.log('logica delete')
      return Object()
    }
  
    selecionar(id: number): T  {
      console.log('logica select')
      return Object()
    }
  
    selecionarTodos(): [T] {
      console.log('logica getALL')
      return [Object()]
    }
  }

}