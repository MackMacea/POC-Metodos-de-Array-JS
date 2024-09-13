var lista = []

window.onload = function(){
        
        for(var i = 0;i < 5; i++){
            lista[i] = parseInt(prompt(`Informe o ${i+1}º numero:`))
        }
var tabela = document.getElementById("tabela")


function gerarlinha(dados,total) {
    return `<tr>
                <td>${dados[0]}</td>
                <td>${dados[1]}</td>
                <td>${dados[2]}</td>
                <td>${dados[3]}</td>
                <td>${dados[4]}</td>
                <td>${total}</td>
            </tr>`
}




const total = lista.reduce((total, currentElement) => total + currentElement)
tabela.innerHTML += gerarlinha(lista,total)



}