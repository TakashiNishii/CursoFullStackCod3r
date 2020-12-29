function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw {
        nome: erro.nome,
        msg: erro.nessage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Roberto'}

imprimirNomeGritado(obj)