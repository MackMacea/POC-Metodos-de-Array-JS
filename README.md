<img src="https://github.com/user-attachments/assets/7c8c6b73-9dc0-43da-9847-adf15889f72d" width="600px" >

# Metodos de Array em JS

 <!--ts-->
 
 * [Spread](#Spread)
 * [Map](#Map)
 * [Reduce](#Reduce)
 * [Filter](#Filter)
 * [Sort](#Sort)
 
 <!--te-->


 ## Spread

 ## Map

 ## Reduce
 Este metodo tem por objetivo transformar todo o conteudo de uma Array em apenas um elemento.<br>
 Por exemplo:

 Tendo uma lista de numeros como:
 ~~~javascript
 const Numeros = [1, 2, 3];
 ~~~~

Podemos utilizar o metodo reduce da seguinte maneira:
~~~javascript
const total = Numeros.reduce((total, currentElement) => total + currentElement)
// Total = 6
~~~
sendo,<br>

~~~javascript
const total
~~~

a variavel onde será guardada a array reduzida

~~~javascript
(total, currentElement)
~~~

os parâmetros do metodo

~~~javascript
total + currentElement
~~~ 
o modo como sera reduzido, neste caso somando.



 ## Filter

 ## Sort
 O método sort tem por objetivo organizar os elementos de uma array seguindo uma logica informada pelo desenvolvedor. <br>
 <br>
 
Para demonstrar o metodo vamos organizar uma lista de vendas de uma empresa de varejo dada pelo seguinte array:

~~~javascript
const produtos = [
	{produto: 'TV', nVendido: 600},
	{produto: 'Batedeira', nVendido: 900},
	{produto: 'Geladeira', nVendido: 300},
	{produto: 'Forno', nVendido: 200},
];
~~~

Podemos ver que a array possui a quantidade de vendas de determinados produtos sem uma sequencia logica aparente.<br>
Para mudar isso podemos usar o método sort da seguinte maneira:
~~~javascript
const Vendas = produtos.sort((a, b) => b.nVendido - a.nVendido);
~~~
neste caso o método ira retornar a array desta maneira:

~~~javascript
const produtos = [
	{produto: 'Batedeira', nVendido: 900},
	{produto: 'TV', nVendido: 600},
	{produto: 'Geladeira', nVendido: 300},
	{produto: 'Forno', nVendido: 200},
];
~~~

podemos perceber que o método organizou a array de maneira decrescente por conta da logica de organização que foi dada
~~~javascript
((a, b) => b.nVendido - a.nVendido);
~~~
Podemos organizar arrays de maneiras diferentes ao passo que alteramos sua logica de organização.<br>
Podemos por exemplo organizar o array de maneira crescente da seguinte maneira

~~~javascript
const Vendas = produtos.sort((a, b) => a.nVendido - b.nVendido);
~~~
o retorno desta logica de organização será:
~~~javascript
const produtos = [
{produto: 'Forno', nVendido: 200},
{produto: 'Geladeira', nVendido: 300},
{produto: 'TV', nVendido: 600},
{produto: 'Batedeira', nVendido: 900},
];
~~~
