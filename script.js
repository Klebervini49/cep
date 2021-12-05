document.querySelector('.busca').addEventListener('click', async (event)=>{
    event.preventDefault();
    let input = document.querySelector('.input').value

    if(input !== ''){
        showWarning('Procurando...')
        let url = `https://viacep.com.br/ws/${input}/json`
        
        let result = await fetch(url);
        let json = await result.json();
        console.log(json)

        if(json['complemento'] === "lado ímpar" || "lado par"){
            document.querySelector('.aviso').style.display = 'none'
            document.querySelector('.resultado').style.display = 'block'
            document.querySelector('.infoBairro').innerHTML = `Bairro: ${json['bairro']}`
            document.querySelector('.infoCep').innerHTML = `Cep: ${json['cep']}`
            document.querySelector('.infoComple').innerHTML = `Complemento: ${json['complemento']}`
            document.querySelector('.infoDdd').innerHTML = `DDD: ${json['ddd']}`
            document.querySelector('.infoCidade').innerHTML = `Cidade: ${json['localidade']}`
            document.querySelector('.infoLoca').innerHTML = `Localização: ${json['logradouro']}`
            document.querySelector('.infoUf').innerHTML = `UF: ${json['uf']}`
        }else{
            showWarning('Localização não encontrada')
        }
    }else{
        showWarning(`Nenhum CEP digitado! <br><br> Digite a localização que deseja e clique em 'Buscar' para realizar a pesquisa.`)
    }
})

function showWarning(msg){
    document.querySelector('.aviso').style.display = 'block'
    document.querySelector('.resultado').style.display = 'none'
    document.querySelector('.aviso').innerHTML = msg;
}