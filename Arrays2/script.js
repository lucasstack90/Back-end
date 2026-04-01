const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raque"];

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);


// lista dentro de lista
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [18, 8, 7.5, 9];
const ListaDeAlunosEmedias = [alunos,medias];
console.log(`A aluna da posição 1 da lista de alunos é: ${ListaDeAlunosEmedias[0][1]}. A nota dessa aluna é ${ListaDeAlunosEmedias[1][1]}.`)



const nomes = ["Ana", "Mario", "Roberto"];
const idades = [30,35,28];
const faculdade = [false, true, true];
const funcionarios = [nomes, idades, faculdade];

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samant"];
const arrayCancat = arrayOriginal.concat(["Andre", "Fernanda"] ["Ricardo", "Ana"], ["Marcelo", "Bia"]);

console.log(arrayCancat)
console.log(arrayOriginal)

const array = [50, 60, 70];
const concatenar = array.concat([80,[90,100]])

console.log(concatenar)
console.log(array)
