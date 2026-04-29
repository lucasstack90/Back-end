const cliente = {
    nome: "Joao",
    idade: "24",
    email: "joao@frima.com",
    telefone: "4298867546",
    enderecos: [],
    saldo: 200,
    efetuarPagamento: function (valor){
        if (valor > this.saldo) {
            console.log("Saldo Insuficiente")
        } else{
            this.saldo -= valor;
            console.log(`Pagamentos realizado. Novo Saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuarPagamento(25);

// adicionando primeiro endereço
cliente.enderecos.push({
    rua: "R. Cmargo Santana",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
});

console.log(cliente);
console.log(cliente.enderecos);

// adicionando segundo endereço
cliente.enderecos.push({
    rua: "R. Josney Carlos",
    numero: 404,
    apartamento: false,
});

console.log(cliente.enderecos);

const ListaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true 
);

console.log(ListaApenasApartamentos);




