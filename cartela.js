function gerarCartela() {
    var cartela = [];
    while (cartela.length < 25) {
        var numeroAleatorio = Math.floor(Math.random() * 75) + 1;
        if (cartela.indexOf(numeroAleatorio) === -1) {
            cartela.push(numeroAleatorio);
        }
    }
    return cartela;
}

console.log("Cartela de Bingo:");
var cartela = gerarCartela();
for (var i = 0; i < 5; i++) {
    console.log(cartela.slice(i * 5, (i + 1) * 5));
}