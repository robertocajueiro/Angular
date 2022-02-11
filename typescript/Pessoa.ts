import Carro from './Carro'

export default class Pessoa {
  private nome: string
  private carroPreferido: string
  private carro: any

  constructor(nome: string, carroPreferido: string){
    this.nome = nome
    this.carroPreferido = carroPreferido
  }

  dizerNome(): string {
    return this.nome
  }

  dizerCarroPreferido(): string {
    return this.carroPreferido
  }

  compraCarro(carro: Carro): void {
    this.carro = carro
  }
  dizerCarroQueTem(): Carro {
    return this.carro
  }
}