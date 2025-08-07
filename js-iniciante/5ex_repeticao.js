// Exercicio 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes: Eduardo, Maria, Fernando, Joao e Francisco printando de cada vez: o número da execução ao lado do nome e os separadores

// Execução: 1
// Nome: Eduardo
// -------------

const Nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']
Nomes.forEach((nome, i) => {
  console.log('Execução: ' + (i + 1) + '\nNome: ' + nome + '\n---------------')
})

console.log('\n')

for (let i = 0; i < Nomes.length; i++) {
  console.log('Execução: ' + (i + 1) +' \nNome: ' + Nomes[i] + '\n---------------')
}