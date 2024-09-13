const produtos = [
	{produto: 'TV', nVendido: 600},
	{produto: 'Batedeira', nVendido: 900},
	{produto: 'Geladeira', nVendido: 300},
	{produto: 'Forno', nVendido: 200},
];


window.onload = function(){
	
	var tabela1 = document.getElementById("tabela1")

	function gerarLinha(dados){
			return `
				<tr>
                	<th>${dados.produto}</th>
                	<th>${dados.nVendido}</th>
           		</tr>
			
			`
	}
	for(var i = 0; i<produtos.length; i++){

		tabela1.innerHTML += gerarLinha(produtos[i])
	}


	produtosArrumados = produtos.slice()

	const Vendas = produtosArrumados.sort((a, b) => b.nVendido - a.nVendido);

	var tabela2 = document.getElementById("tabela2")

	for(var i = 0; i<produtosArrumados.length; i++){

		tabela2.innerHTML += gerarLinha(produtosArrumados[i])
	}






}

