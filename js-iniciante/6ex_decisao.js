// Exercicio 2 - Estrutura de Decisão

// Percorrer uma lista de cidades, contendo os cidades: Sao Paulo, Rio de Janeiro, Florianópolis, Recife e verificar se a cidade encontrada for florianopolis

// Execução: 1
// Cidade: Sao Paulo
// Encontrado ou Não encontrado
// -----------------------

const cidades = ['Sao Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']

cidades.forEach((cidade, i) => {
  i += 1
  if (cidade == 'Florianopolis') {
    console.log('Execução ' + i + '\nCidade: ' + cidade + '\nEncontrado' + '\n-----------------------')
  } else {
    console.log('Execução: ' + i + '\nCidade: ' + cidade + '\nNão Encontrado' + '\n-----------------------')
  }
})

for (let i = 0; i < cidades.length; i++) {
  if (cidades[i] == 'Florianopolis') {
    console.log('Execução: ' + (i + 1) + '\nCidade: ' + cidades[i] + '\nEncontrado' + '\n-----------------------')
  } else {
    console.log('Execução: ' + (i + 1) + '\nCidade: ' + cidades[i] + '\nNão Encontrado' + '\n-----------------------')
  }
}