// Objetivo: confirmar que o navegador está lendo o jogo.js .
// No index.html , a linha abaixo fica logo antes de </body> . Ela vem no final para que todo
// o HTML já exista quando o script rodar.
// <script src="jogo.js"></script>
// Crie o arquivo jogo.js na mesma pasta e escreva:
// console.log('O jogo carregou!');
// Teste: abra o index.html , aperte F12 e veja a mensagem na aba Console. Depois apague
// essa linha.
// Pergunta para a turma: o que aconteceria se o <script> estivesse no <head> ? (Os
// elementos ainda não existiriam e o getElementById do passo 3 devolveria null .)

// console.log('O jogo carregou!');

//Objetivo: guardar tudo que o jogo precisa lembrar durante a partida.
let palavraSecreta = 'JAVASCRIPT';
let letrasChutadas = [];
let tracos = [];
let erros = 0;
let maxErros = 6;

//console.log(palavraSecreta);

let imagem = document.getElementById('imagem');
let textoPalavra = document.getElementById('palavra');
let textoMensagem = document.getElementById('mensagem');
let textoErros = document.getElementById('erros');
let botaoReiniciar = document.getElementById('reiniciar');
let botoesLetras = document.querySelectorAll('.letra');

//console.log(botoesLetras.length);
//console.log(textoPalavra);

