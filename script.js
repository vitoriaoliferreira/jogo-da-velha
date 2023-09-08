document.addEventListener("DOMContentLoaded", function () {
    const nomeJogadoresForm = document.getElementById("nomeJogadores");

    nomeJogadoresForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        const nome1Input = document.getElementById("nome1");
        const nome2Input = document.getElementById("nome2");

        const nome1 = nome1Input.value;
        const nome2 = nome2Input.value;
        
        //adicionando os nomes às variaveis
        let jogador1 = nome1;
        let jogador2 = nome2;


        console.log("Nome do Jogador 1:", jogador1);
        console.log("Nome do Jogador 2:", jogador2);

       //limpando os nomes no final
        nome1Input.value = "";
        nome2Input.value = "";

       
    });
});
