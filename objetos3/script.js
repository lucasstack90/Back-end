const cliente = {
    nome: "joão",
    idade: 24,
    email: "joa@gmail.com",
    telefone: "1155429087",
    enderecos: [],
    saldo: 200,
    
    // Método inserido corretamente dentro do objeto
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
        } else {
            this.saldo -= valor; // Subtrai o valor do saldo atual
            console.log(`Pagamento de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    }
};

// Exemplo de uso do método:
cliente.efetuaPagamento(25); 

cliente.enderecos.push({
    rua: "R. Joseph Clienber",
    numero: 1220,
    apartamento: true, 
    complemento: "apar 320"
});

for (let chave in cliente){
    let tipo = typeof cliente[chave];
if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  }
}

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

const encomenda = {
    desrinatario:cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda);

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)

// 1. Filtragem de apartamentos (Corrigido comsole -> console)
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);

// 2. Manipulação de Objetos (Corrigido abj -> obj)
const objPersonagem = {
    nome: "Gabriel",
    classe: "mago",
    nivel: "20"
};

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gabriel, o mestre dos magos";

// Saídas no console:
console.log(objPersonagem.nome);  // Saída: "Gabriel"
console.log(objPersonagem2.nome); // Saída: "Gabriel, o mestre dos magos"


