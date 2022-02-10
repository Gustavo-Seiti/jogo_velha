// Definir todos os elementos que modificaremos no DOM

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("btn_container button");
let messageContainer = document.getElementById("message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Evento de click nos boxes 

for(let i = 0; i < boxes.length; i++){

    // Quando alguém clica na caixa

    boxes[i].addEventListener("click", function(){
        let el;

        if(player1 == player2)
        {
            el = x;
        }
        else{
            el = o;
        }

        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);
            checkWin();
        }
        if (player1 == player2){
            player1++;
        }else{
            player2++;
        }
    })
        
}
checkWin();

function checkWin()
{
    let b1 = document.getElementById("block_1");
    let b2 = document.querySelector("#block_2");
    let b3 = document.getElementById("block_3");
    let b4 = document.getElementById("block_4");
    let b5 = document.getElementById("block_5");
    let b6 = document.getElementById("block_6");
    let b7 = document.getElementById("block_7");
    let b8 = document.getElementById("block_8");
    let b9 = document.getElementById("block_9");

        // primeira linha 
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            declareWinner("x");
        }else if (b1Child == "o" && b2Child == "o" && b3Child == "o"){
            declareWinner("o");
        }
    }
    //segunda linha
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            declareWinner("x");
        }else if (b4Child == "o" && b5Child == "o" && b6Child == "o"){
            declareWinner("o");
        }
    }// terceira linha
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if (b7Child == "o" && b8Child == "o" && b9Child == "o"){
            declareWinner("o");
        }
    }
    // primeira coluna
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            declareWinner("x");
        }else if (b1Child == "o" && b4Child == "o" && b7Child == "o"){
            declareWinner("o");
    }

    }
    // segunda coluna
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            declareWinner("x");
        }else if (b2Child == "o" && b5Child == "o" && b8Child == "o"){
            declareWinner("o");
    }
}
    // terceira coluna
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if (b3Child == "o" && b6Child == "o" && b9Child == "o"){
            declareWinner("o");
    }
}
    // diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            declareWinner("x");
        }else if (b1Child == "o" && b5Child == "o" && b9Child == "o"){
            declareWinner("o");
        }
    }
    // diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            declareWinner("x");
        }else if (b3Child == "o" && b5Child == "o" && b7Child == "o"){
            declareWinner("o");
        }
    }

    // deu velha
    let counter = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }
    if(counter == 9)
    {
        declareWinner();
    }
    
    function declareWinner(winner){
        let scoreboardX = document.getElementById("score_1");
        let scoreboardY = document.getElementById("score_2");
    
        let msg = "";
    
        if(winner == "x"){
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
            msg = "Jogador 1 venceu!";
        }else if(winner == "o"){
            scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
            msg = "Jogador 2 venceu!";
        }else{
            msg = "Deu velha!";
        }
        messageText.innerHTML = msg;
        messageContainer.classList.remove("hide");
    
        setTimeout(function(){
            messageContainer.classList.add("hide");
        }, 3000);
    
        // zera as jogadas
    
        player1 = 0;
        player2 = 0;
    
        // remover x e o
    
        let boxesToRemove = document.querySelectorAll(".box div");
    
        for(let i = 0; i < boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }
    
    // limpa o jogo, declara o vencedor e atualiza o placar

}