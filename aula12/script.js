
const notas = [10, 6.5, 8, 7.5];
notas.forEach(function(){ 
    console.log('oi') 
});

const nome = [10,6.5,8,7.5];
let somaDasNotas = 0;
notas.forEach(function (nota){
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`);

const nomes = ['Evaldo', 'Mari', 'Camis'];
notas.forEach(function (notas){
    console.log(nomes);
});

// Arrow Faction
nomes.forEach((nome) => {
    console.log(nome);
})

const maisnotas = [10, 9.5, 8, 7, 6];
const notasAtualizadas = maisnotas.map ((nota) =>{
    return nota +1 >= 10 ? 10: nota + 1;
});

console.log(notasAtualizadas);

// Correction for the standardized names
const nomes2 = ["ana julia", "Caio vinicios", "BIA silva"];
const nomesPadronizados = nomes2.map((nome) => nome.toUpperCase()); 

console.log(nomesPadronizados); 


