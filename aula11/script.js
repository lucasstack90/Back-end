const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

// Cálculo da média da turma
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const media = somaDasNotas / notasDaSala.length;
  return media;
}

console.log(`A média da sala de Javascript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//Notas Novas e Originais
const notas = [7,7,8,9];
const novasNotas = [...notas, 10];
console.log(`As novas notas são ${novasNotas}`)
console.log(`As novas Originais são ${notas}`)

// Set
const nomes = ["Ana", "Clara", "Maria", "Maria", "Maria", "joão", "joão", "joão"];
const meuSet = new Set(nomes);
console.log (meuSet);
