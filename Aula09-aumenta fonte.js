/* definidndo o tamanho da fonte
var padrao = 18;
var i = 0; // definindo contador para ajudar durante os loops


//função para quando o incremento chegar no limite ele retorna a posição do vetor para 0
function contraste(){
    var cor = ["#000","#ccc","#cfc","#fa4"];
    var letra = ["#fff","#000","#000","#02c"];
    
    i++;
    
    if(i > cor.length){
        i = 0;
        
    }
}
//acionando o elemento fundo e texto e alterando de acordo com a posição do incremento
    document.getElementById("fundo").style.backgroundColor = cor(i);
    document.getElementById("texto").style.backgroundColor = letra(i);

//função para fazer o aumento da fonte recendo o argumento contador do html
function tamfonte(contador){
    //logica pra setar 18 quando contador for iqual ao mesmo voltar ao valor padrão
    if(contador == 18){
        padrao = contador;
    }else{
        padrao += contador;//logica para almentar o padrão mais o contador
    }
    if(contador >= 81){
        padrao = 81;
    }else if(contador < 9){
        padrao = 9;
        
    }


document.getElementById("texto").style.fontSize = padrao + "px";//selecionando o elemento texto no html para as alterações em pixel
}*/

//Corrijido

var padrao = 18;
var i = 0;

function contraste() {
    var cor = ["#000", "#ccc", "#cfc", "#fa4"];
    var letra = ["#fff", "#000", "#000", "#02c"];

    i++;

    if (i >= cor.length) {
        i = 0;
    }

    document.getElementById("fundo").style.backgroundColor = cor[i];
    document.getElementById("texto").style.backgroundColor = letra[i];
}

function tamfonte(contador) {
    if (contador === 18) {
        padrao = contador;
    } else {
        padrao += contador;
    }

    if (padrao >= 81) {
        padrao = 81;
    } else if (padrao < 9) {
        padrao = 9;
    }

    document.getElementById("texto").style.fontSize = padrao + "px";
}