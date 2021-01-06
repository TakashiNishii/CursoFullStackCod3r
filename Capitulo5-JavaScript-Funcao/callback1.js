const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+ 1 }. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))

//Para cada elemento ele chama o callback