
// A primeira deve receber um array de números, e retornar um novo array com todos os números do array original  multiplicados por 3.


const arrayNumeros =[2,8,5,7,1,3]// meu array inicial

console.log('ArrayNumeros', arrayNumeros)// mostra meu array original

console.log('-=-')
const multiplicaX = (array)=>{
  const newArray =[] // um array vazio
  for(i = 0;i <array.length; i++){
    newArray.push(array[i]*2)    
  }
  return newArray
}

console.log(multiplicaX(arrayNumeros))


// A segunda deve receber um array de números, e retornar um novo array apenas com os números pares do array original.
const pares = (array)=>{
  const arrayPares = []
  for (i=0;i<array.length;i++){
    if(array[i]%2 ===0){
      arrayPares.push(array[i])
    }
    return arrayPares
  }
}
console.log(pares(arrayNumeros))


// Usando o map(), percorra um array de números, calcule o triplo de cada número e retorne um novo array com os valores triplicados.
//.......................................................indice, arrayInteiro só pra mostrar que podem ser usados
const arrayMultiplicadoPor3 = arrayNumeros.map((elemento, indice,arrayInteiros)=>{// mapeia dentro de arrayNumeros o elemento, e retorna ele multiplicado por 3
  return elemento*3
})

console.log(arrayMultiplicadoPor3)

// Usando o filter(), percorra um array de números e retorne um novo array que contenha apenas os números pares presentes no array original.

const arrayPares = arrayNumeros.filter((elemento)=>{//criei um arrayPares, que vai receber o filter do arrayNumeros, que filtra o elemento para ver se é par
  if (elemento % 2 ===0 ){
    return true
  }
})
console.log(arrayPares,'Array pares')



const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]
// Com o array de pokémons disponibilizado, faça o que se pede:
// Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.

function alteraVida(poke){
  return {...poke,vida: 100}
}

// Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
// Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo.


const paiDePet = {
  nome:'Orci',
  pet: {
    nome: 'Bucky',
    raca: 'Fox paulistinha',
    idade: 2
  }
}
console.log(paiDePet)
console.log(paiDePet.pet.raca)