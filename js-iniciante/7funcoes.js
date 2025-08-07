// Funções

// Bloco de código que é chamado pra ser executado
// Pode ou não, receber parâmetros
// Pode ou não, retornar dados

// Sem Parâmetro

function printarNomeSemParametro() {
    const nome = 'Rafael'
    const sobrenome = 'Mainieri'
    let idade = 23

    console.log('Nome: ' + nome + ' ' + sobrenome)
    console.log('Idade: ' + idade)
}

console.log('----------')

function printarNomeComParametro(nome, sobrenome, idade) {
    console.log('Nome: ' + nome + ' ' + sobrenome)
    console.log('Idade: ' + idade)
}

console.log('----------')

function gerarNome(nome, sobrenome) {
    return('Nome: ' + nome + ' ' + sobrenome)
}

printarNomeSemParametro()
printarNomeComParametro('Tatiana', 'Retamozo', 24)
console.log(gerarNome('Isabeli', 'Soletti'))