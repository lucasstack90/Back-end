const cliente = {
    nome: 'Andr',
    idade: 32,
    cpf:'11234598855',
    email: 'andre@dominio.com',
};

console.log(`O nome do cliente é ${cliente.nome}e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 ultimos digitos do CPF são ${cliente.cpf.substring(8,11)} e os 3 primeiros digitos são ${cliente.cpf.substring(0,3)}.`);

const pessoa = {
    nome:'Luana',
    profissao: 'Engenheira',
};

pessoa.telefone = "11 22333444";
console.log(pessoa);

const NovaPessoa = {
    nome: "Pedro"
}

pessoa.nome = NovaPessoa;
delete pessoa.telefone;
console.log(pessoa);
