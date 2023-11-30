
const key = "96906b28136a7be294c9c7dc5dc20c5d"
 



function colocarDadosNaTela(dados){
    console.log(dados)
document.querySelector(".title-city").innerHTML = "Tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"  
document.querySelector(".cloudy").innerHTML = dados.weather[0].description
document.querySelector(".moisture").innerHTML = dados.main.humidity + "%"
document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}






  async function buscarCidade(cidade){
const dados = await fetch (` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

colocarDadosNaTela(dados)
 }







    





function cliqueNoBotao(){

    const cidade = document.querySelector(".input-city").value

    
    buscarCidade(cidade)

    
}