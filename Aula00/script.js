const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];
const ListaDeAlunosMedia = [alunos,medias];

function exibeNomeNota(aluno){
    if(ListaDeAlunosMedia[0].includes(aluno)){
        console.log(`${aluno} está cadastrado`);
        const indice = ListaDeAlunosMedia[0].indexOf(aluno);
        const mediaDoAluno = ListaDeAlunosMedia[1][indice];
        console.log(`${aluno} tem a media ${mediaDoAluno}.`);

    } else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeNota("João");
const numeros = [100, 200, 300, 400, 500, 600]

//incremento
for (let indice = 0; indice < numeros.length;  indice++){
    console.log(numeros[indice]);
}

//Decremento
for (let i = 0; i < notas.length; i--){
    console.log(numeros[i])
}



const notas = [10,6.5,8,7.5];
let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++){
    console.log(numeros[i])
}

const media = somaDasNotas / notas.length;
console.log(`A medida das notas é ${media}.`);