function Click(){
    //criando a função para mudar o fundo quando clickar
    document.getElementById("fundo").style.backgroundColor="#008";
    
}

//agora criamos uma condicional para os botoes quando forem acionados 
//a função recebe o argumento da cor durante a condicional
function troca(cor){
    
   if(cor == "Vermelho"){
       document.getElementById("fundo").style.backgroundColor="red";
       
   }else if(cor == "Verde"){
        document.getElementById("fundo").style.backgroundColor="#f0f";
       
   }else if(cor == "Amarelo"){
       document.getElementById("fundo").style.backgroundColor="#ffff00";
       
   }else{
       document.getElementById("fundo").style.backgroundColor="blue";
   }
}