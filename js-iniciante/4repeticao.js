// repetição por array

//array.forEach(element => {

//});

const cidades = ['Porto Alegre', 'Canoas', 'Gravatai', 'Viamão']

cidades.forEach((cidade, i) => {
  console.log('Cidade de índice ' + i + ': ' + cidade)
})

// repetição fixa

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
for (let i = 0; i < 10; i++) {
  console.log('Repetição ' + (i + 1))
}

for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i])
}