const produtos = [
	{produto: 'TV', nVendido: 600},
	{produto: 'Batedeira', nVendido: 900},
	{produto: 'Geladeira', nVendido: 300},
	{produto: 'Forno', nVendido: 200},
];

const Vendas = produtos.sort((a, b) => b.nVendido - a.nVendido);
