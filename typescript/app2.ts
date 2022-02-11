import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* --- criar carros ---*/
let carroA = new Carro('Prisma', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Opala', 4)

/* -- montar a lista de carros da concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Bernado Vieira', listaDeCarros)

/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro */
let cliente = new Pessoa('João', 'Veloster');
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  
  if(carro['modelo'] == cliente.dizerCarroPreferido()) {
    
    // Compra o carro
    cliente.compraCarro(carro)
  }
})

console.log(cliente.dizerCarroQueTem())




