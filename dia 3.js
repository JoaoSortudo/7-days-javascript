function jogoDeEscolhas() {
    const escolhas = ['Front-end', 'Back-end', 'React', 'Vue', 'C#', 'Java', 'Continuar', 'Fullstack'];
    for (let listaDeEscolhas = 0; listaDeEscolhas < escolhas.length; listaDeEscolhas ++) {
        let pergunta1 = prompt('Olá! Você gostaria de seguir pelo Front-end ou pelo Back-end?')
        let perguntaFront = prompt('Ok, jogador, como desenvolvedor front-end, você gostaria de aprender React ou Vue?')
        let perguntaBack = prompt('Ok, jogador, como desenvolvedor back-end, você gostaria de aprender C# ou Java?')
        let perguntaFront2 = prompt('Ótimo, você então pretende continuar se desenvolvendo no Front-end ou prefere estudar para se tornar um programador Fullstack?')
        let perguntaBack2 = prompt('Ótimo, você então pretende continuar se desenvolvendo no Back-end ou prefere estudar para se tornar um programador Fullstack?')

        if (pergunta1 == escolhas[0]) {
            prompt(perguntaFront);
        }
      
        else if (pergunta1 == escolhas[1]) {
            prompt(perguntaBack);
        }

        else if (perguntaFront == escolhas [3]){
            prompt(perguntaFront2);
        }
        
        else if (perguntaBack == escolhas[4]){
            prompt(perguntaBack2);
        }
        
        else if (pergunta1 == null){
            alert('Uma pena. Se quiser voltar a jogar, basta recarregar a página!');
            jogoDeEscolhas.stop();
        }

        else {
            alert('Essa não é uma resposta válida. Responda com "Front-end" ou "Back-end".');

        }
    }
}

jogoDeEscolhas();