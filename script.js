const idades = [5, 12, 15, 17, 18, 19, 25, 32, 33, 54];
const permitidos = idades.filter(habilitacao);

function habilitacao(idades) {
    return idades >= 18;
 }

// console.log(permitidos)