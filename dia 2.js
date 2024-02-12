function seuCadastro() {
    let nome = prompt('Qual é o seu nome?');
    let idade = prompt('Boa noite, '+nome+'! Quantos anos você tem?');
    let linguagem = prompt('Legal! Agora pra finalizar, qual linguagem de programação você está aprendendo?');
    let pergunta = confirm('Olá '+nome+', você tem '+idade+' anos e já está aprendendo '+linguagem+'! Você gosta de estudar '+linguagem+'? Responda com o OK para SIM ou CANCELAR para NÃO.')

    if (pergunta == true) {
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    }
    else {
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
}
//seuCadastro();



/*let input = process.argv

function seuCadastro () {
    console.log("Produto: "+a*b)
} 

multiplicar(input[2], input[3]); */