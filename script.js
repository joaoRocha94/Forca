var palavraSorteada;
var vidas = 5;
var vidaP = true;
var acertos = 0;
var erros = 0;
var letrasUtilizadas = [];
var partidaGanha = false;
var jogoGanho = false;
var jogoPerdido = false;
var posicao;

const palavras = [

  "CASA",
  "VODKA",
  "OTORRINOLARINGOLOGISTA",
  "MODA",
  "HARRY POTTER",
  "FUSCA",
  "A PRINCESA E A POPSTAR",
  "OTAKU",
  "GUARDA-CHUVA",
  "DORMIR",
  "OREO",
  "TRAVESSEIRO",
  "ABACAXI",
  "LUA",
  "MOUSSE",
  "HIPOPOTAMO",
  "ORNINTORRINCO",
  "SINESTESIA",
  "CHUVA",
  "CARAMELO",
  "LIVROS",
  "CUPCAKE",
  "ONOMATOPEIA",
  "HIPOPOTAMO",
  "NEFELIBATA"

];

//const palavraSorteada = palavras[Math.floor(Math.random()*palavras.length)];

function sortearPalavraSecreta(){
  const iPalavra = Math.floor(Math.random()*palavras.length);
  palavraSorteada = palavras[iPalavra];
}
sortearPalavraSecreta();

function exibirPalavraSecreta(){
  const palavraS = document.getElementById("palavra-secreta");

  for(posicao=0; posicao<palavraSorteada.length; posicao++){
    palavraS.innerHTML = palavraS.innerHTML+"_"+" ";
  }
  
}
exibirPalavraSecreta();

function encontrarLetra(){

}
encontrarLetra();

//while(/*!partidaGanha &&*/ vidas > 0){
    //letrasUtilizadas += letrasUtilizadas + l;
  //}

 /* if (vidas > 0){
    jogoGanho = true;;
  }*/
  /*else{
    jogoPerdido = true; 
    //mostrar palavra sorteada
  }*/

/*
if(l == palavraS){
          lE += 1;
          vidaP = false;
        }
        if(vidaP){
          vidas--;
          //mostrar parte do corpo do boneco
        }

      partidaGanha = true;
      for (posicao = 0; posicao < palavraSorteada.length(); i++){
        if(lE == 0){
          palavraS.innerHTML = palavraS.innerHTML+"_"+" ";
          partidaGanha = false;
        }
        
        else{
          palavraS.innerHTML = palavraS.innerHTML+l;
        }
      }
*/